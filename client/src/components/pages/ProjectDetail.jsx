import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const ProjectView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get("/api/auth/profile");
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch user profile.");
      }
    };

    if (project) {
      const now = new Date();
      const start = new Date(project.startDate);
      const end = new Date(project.endDate);

      if (now < start) {
        setStatus("upcoming");
      } else if (now >= start && now <= end) {
        setStatus("ongoing");
      } else {
        setStatus("completed");
      }
    }

    fetchProfile();
  }, [project]);

  if (!project) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-medium">No project data provided.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-green-700 underline hover:text-green-900 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-xl rounded-2xl mt-20 transition-all duration-500 ease-in-out">
      <h1 className="text-4xl font-extrabold text-green-700 mb-4 tracking-tight">
        {project.title}
      </h1>

      <p className="text-gray-700 text-lg mb-6">{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt="Project"
          className="w-full h-auto object-cover rounded-xl mb-8 shadow-md hover:scale-[1.01] transition duration-300"
        />
      )}

      <div className="space-y-3 text-gray-700 text-sm bg-gray-50 p-5 rounded-xl border border-green-100 shadow-inner">
        <p>
          <strong className="text-green-800">Status:</strong>{" "}
          <span
            className={`capitalize font-semibold ${
              status === "upcoming"
                ? "text-blue-600"
                : status === "ongoing"
                ? "text-orange-600"
                : "text-gray-600"
            }`}
          >
            {status}
          </span>
        </p>

        <p>
          <strong className="text-green-800">Collaborators:</strong>{" "}
          <span className="capitalize font-semibold text-orange-600">
            {project.collaborators?.length > 0 ? (
              project.collaborators.map((collab, index) => (
                <span key={index}>
                  {collab.name}
                  {index < project.collaborators.length - 1 && ", "}
                </span>
              ))
            ) : (
              <span>No collaborators</span>
            )}
          </span>
        </p>

        <p>
          <strong className="text-green-800">Start Date:</strong>{" "}
          {project.startDate
            ? new Date(project.startDate).toLocaleDateString()
            : "N/A"}
        </p>

        <p>
          <strong className="text-green-800">End Date:</strong>{" "}
          {project.endDate
            ? new Date(project.endDate).toLocaleDateString()
            : "N/A"}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        {status === "upcoming" && user?.role !== "ngo" && (
          <button
            onClick={() =>
              navigate("/volunteer-form", {
                state: { projectId: project._id, ngoId: project.ngo },
              })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            Join as Volunteer
          </button>
        )}

        {user?.role === "ngo" && (
          <button
            onClick={() =>
              navigate("/collaborator-form", {
                state: { projectId: project._id, ngoId: project.ngo },
              })
            }
            className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-2 rounded-full font-medium shadow-inner transition"
          >
            Join as Collaborator
          </button>
        )}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() =>
            navigate("/submit-review", {
              state: { projectId: project._id, ngoId: project.ngo },
            })
          }
          className="bg-green-50 text-green-800 font-semibold px-6 py-2 rounded-full hover:bg-green-100 transition duration-300 shadow"
        >
          Submit Your Feedback
        </button>
      </div>
    </div>
  );
};

export default ProjectView;
