import { motion } from "framer-motion";
import {
  FaMicrophoneAlt,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance.js";
export default function RaiseYourVoice() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General",
    message: "",
    location: "",
    files: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const categories = [
    "General",
    "Education",
    "Health",
    "Women’s Rights",
    "Environmental Issues",
    "Poverty",
    "Corruption",
    "Infrastructure",
    "Public Safety",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("category", formData.category);
    data.append("message", formData.message);
    data.append("location", formData.location);
    formData.files.forEach((file) => {
      data.append("media", file);
    });

    try {
      const response = await axiosInstance.post("/raise-issue", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000,
      });

      if (response.data) {
        setSuccessMessage("Thank you! Your issue has been submitted.");
        setFormData({
          name: "",
          email: "",
          category: "General",
          message: "",
          location: "",
          files: [],
        });
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`relative px-6 md:px-12 py-16 rounded-xl shadow-xl transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-400 hover:bg-gray-200 text-white transition-all"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Raise Your Issue
        </h1>
        <p className="text-lg opacity-70">
          Fill the form to raise your local issue. Add supporting media and location
          for better understanding.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`max-w-2xl mx-auto mt-10 p-6 rounded-lg shadow-lg transition-all duration-500 ${
            darkMode ? "bg-zinc-900 border border-gray-700" : "bg-gray-300 border border-gray-300"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none transition-all ${
                darkMode ? "bg-black text-white border-gray-600 focus:border-white" : "bg-white text-black border-gray-300 focus:border-black"
              }`}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none transition-all ${
                darkMode ? "bg-black text-white border-gray-600 focus:border-white" : "bg-white text-black border-gray-300 focus:border-black"
              }`}
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none transition-all ${
                darkMode ? "bg-black text-white border-gray-600 focus:border-white" : "bg-white text-black border-gray-300 focus:border-black"
              }`}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location of the Issue (City, Area, Landmark)"
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none transition-all ${
                darkMode ? "bg-black text-white border-gray-600 focus:border-white" : "bg-white text-black border-gray-300 focus:border-black"
              }`}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the issue in detail..."
              rows="5"
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none transition-all resize-none ${
                darkMode ? "bg-black text-white border-gray-600 focus:border-white" : "bg-white text-black border-gray-300 focus:border-black"
              }`}
            ></textarea>

            <label
              htmlFor="file-upload"
              className="flex items-center gap-3 cursor-pointer bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-white"
            >
              <FaCloudUploadAlt /> Upload Images or Videos
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*,application/pdf"
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
            </label>

            {formData.files.length > 0 && (
              <ul className="text-sm text-green-500 list-disc pl-5">
                {formData.files.map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit Issue"}
            </motion.button>
          </form>

          {successMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-500 font-semibold text-center"
            >
              <FaCheckCircle className="inline-block mr-2" /> {successMessage}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}