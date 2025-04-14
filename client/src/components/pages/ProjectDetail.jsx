import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const project = state?.project;

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
        <button
          onClick={() => navigate("/volunteer-form", { state: { projectId: project._id,
            ngoId: project.ngo } })}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Join as Volunteer
        </button>
        <button
          onClick={() => navigate("/collaborator-form", { state: { projectId: project._id } })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Join as Collaborator
        </button>
      </div>
    </div>
  );
};

export default ProjectView;
