import React, { useState } from "react";
import axios from "axios";

const UploadYourProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    ngo: "", // Populate with NGO ID if available via auth or context
    volunteers: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage("");

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      data.append("image", imageFile);

      const res = await axios.post("/api/projects", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data.message || "Project uploaded successfully.");
      setFormData({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        ngo: "",
        volunteers: "",
      });
      setImageFile(null);
    } catch (err) {
      setMessage("Error uploading project.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-26 md:px-20">
      <div className="max-w-3xl mx-auto bg-[#e7f8ec] shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Upload Your Project
        </h2>

        {message && (
          <div className="mb-4 text-center text-green-700 font-medium">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-green-800">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-green-800">Description</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-green-800">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-green-800">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-green-800">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 bg-white rounded border focus:outline-none"
              required
            />
          </div>

          {/* <div>
            <label className="block mb-1 font-medium text-green-800">
              Volunteers (comma-separated IDs)
            </label>
            <input
              type="text"
              name="volunteers"
              value={formData.volunteers}
              onChange={handleChange}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. 643a5c3e2e19b3f2a0c8a12a, 643a5..."
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Submit Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadYourProject;
