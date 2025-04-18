import React from "react";
import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const ProjectView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const project = state?.project;
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('/api/auth/profile'); // Your backend endpoint
        setUser(res.data.user);
        //setVolunteer(res.data?.volunteer);
        //console.log("volunteer dtaa",res.data.volunteer); // assuming res.data is the user object
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch user profile.");
      }
    };
    fetchProfile();
  }, []);
  if (!project) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">No project data provided.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6  bg-white shadow-lg rounded-xl mt-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="text-sm text-gray-600 mb-6">
        <p>
          <strong>Start Date:</strong>{" "}
          {project.startDate ? new Date(project.startDate).toLocaleDateString() : "N/A"}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {project.endDate ? new Date(project.endDate).toLocaleDateString() : "N/A"}
        </p>
      </div>

      <div className="flex gap-4">
       {user?.role !=='ngo' ? <button
          onClick={() => navigate("/volunteer-form", { state: { projectId: project._id,
            ngoId: project.ngo } })}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Join as Volunteer
        </button>

        :<button
          onClick={() => navigate("/collaborator-form", { state: { projectId: project._id,
            ngoId: project.ngo } })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Join as Collaborator
        </button>
}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() =>
            navigate("/submit-review", {
              state: { projectId: project._id, ngoId: project.ngo },
            })
          }
          className="bg-green-100 text-green-800 font-semibold px-6 py-2 rounded-lg hover:bg-green-200 transition duration-300"
        >
          Submit Your Feedback
        </button>
      </div>
    </div>
  );
};
export default ProjectView;
