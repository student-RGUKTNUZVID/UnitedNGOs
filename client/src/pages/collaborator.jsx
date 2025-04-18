import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import axios from 'axios';
import {jwtDecode} from "jwt-decode";
const CollaboratorForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const token = localStorage.getItem("token");
  let userId = null;

  if (token && typeof token === "string") {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
      userId = decoded.id;
      console.log(userId); // Adjust based on your token payload
    } catch (error) {
      console.error("Invalid token", error);
    }
  } else {
    console.warn("Token not found or not a string");
  }
  const { state } = useLocation();
  const navigate = useNavigate();
  const projectId = state?.projectId;
  const ngoId=state?.ngoId;
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...formData,
        projectId: projectId,
        ngoId:ngoId,
        userId,
      };
      const res = await axiosInstance.post("/api/join-collaborator", payload);
      if (res.data.success) {
        toast.success("Thank you for collaborating!");
        setTimeout(() => navigate("/upcoming-projects"), 2000); // go back
      }
    } catch (err) {
      console.error("Error submitting collaborator form", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    navigate(-1); // This will navigate one step backward in the history
    if (onClose) {
      onClose(); // You can also call onClose if you need to perform additional actions
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Collaborator Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Organization Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input name="email" type="email" placeholder="Contact Email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
          <textarea name="description" placeholder="How do you want to collaborate?" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" required />
          <div className="flex justify-end gap-2">
          <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollaboratorForm;
