import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const VolunteerForm = ({ onClose }) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const projectId = state?.projectId;
    const ngoId = state?.ngoId;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        skills: formData.skills.split(",").map(skill => skill.trim()),
        ngoId:ngoId,
        projectId: projectId // ← passed as 'ngoId' assuming one project = one NGO
      };

      const res = await axios.post("http://127.0.0.1:3000/api/join-volunteer", payload);

      if (res.data.success) {
        toast.success("Thank you for volunteering!");
        setTimeout(() => navigate('/upcoming-projects'), 2000); // go back
      }
    } catch (err) {
      console.error("Error submitting volunteer form", err);
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-green-700">Thank you for volunteering!</h2>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Close
        </button>
      </div>
    );
  }

  return (
    <div className=" relative bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-green-700">Volunteer Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="skills"
          type="text"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="location"
          type="text"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
