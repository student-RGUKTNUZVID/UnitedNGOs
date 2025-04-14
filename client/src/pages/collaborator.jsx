import React, { useState } from "react";

const CollaboratorForm = ({ onClose, projectId }) => {
  const [formData, setFormData] = useState({
    orgName: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/api/collaborators", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, projectId }),
      });
      alert("Collaboration request submitted!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Collaborator Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="orgName" type="text" placeholder="Organization Name" value={formData.orgName} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input name="email" type="email" placeholder="Contact Email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
          <textarea name="details" placeholder="How do you want to collaborate?" value={formData.details} onChange={handleChange} className="w-full border p-2 rounded" required />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollaboratorForm;
