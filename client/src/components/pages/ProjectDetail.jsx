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
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="text-sm text-gray-600">
        <p>
          <strong>Start Date:</strong>{" "}
          {project.startDate ? new Date(project.startDate).toLocaleDateString() : "N/A"}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {project.endDate ? new Date(project.endDate).toLocaleDateString() : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProjectView;
