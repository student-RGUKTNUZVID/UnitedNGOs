import { motion } from "framer-motion";
import { FaMicrophoneAlt, FaHandsHelping, FaComments, FaUsers, FaCloudUploadAlt, FaCheckCircle, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

export default function RaiseYourVoice() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General",
    message: "",
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const categories = ["General", "Education", "Health", "Women’s Rights", "Environmental Issues", "Poverty", "Corruption"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you for raising your voice! We will get back to you soon.");
      setTimeout(() => setSuccessMessage(""), 3000);
      setFormData({ name: "", email: "", category: "General", message: "", file: null });
    }, 2000);
  };

  return (
    <section className={`${darkMode ? "bg-[#0D0D0D] text-white" : "bg-white text-black"} relative px-6 md:px-12 py-16 rounded-xl shadow-xl overflow-hidden transition-all duration-500`}>
      {/* Theme Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-500 text-white transition-all"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Floating Speech Bubbles */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-10 left-6 bg-[#FFD700] text-black px-3 py-2 rounded-lg text-sm shadow-md">
        <FaUsers className="inline-block mr-2" /> Voices Unite!
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute top-1/2 right-6 bg-[#FF5733] px-4 py-2 rounded-lg text-sm shadow-md">
        <FaComments className="inline-block mr-2" /> We Need Change!
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-10 left-1/3 bg-[#45B39D] px-4 py-2 rounded-lg text-sm shadow-md">
        <FaHandsHelping className="inline-block mr-2" /> Let's Act!
      </motion.div>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-[#FFD700] drop-shadow-md">
          Raise Your Voice
        </h1>

        {/* Animated Wave Effect */}
        <motion.div 
          className="w-24 h-1 bg-[#FFD700] mx-auto my-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <p className="mt-3 text-lg md:text-xl font-light">
          Your voice matters. Share your concerns, stories, and ideas to bring change!  
        </p>

        {/* Form Section */}
        <div className={`max-w-lg mx-auto mt-8 p-6 rounded-lg shadow-lg ${darkMode ? "bg-[#1C1C1C] border border-[#FFD700]" : "bg-gray-100 border border-gray-300"}`}>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#FFD700]"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#FFD700]"
            />

            {/* Category Selection */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#FFD700]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Message Input */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="4"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#FFD700]"
            ></textarea>

            {/* File Upload */}
            <label className="flex items-center gap-3 bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700">
              <FaCloudUploadAlt /> Upload Supporting File
              <input type="file" onChange={handleFileChange} className="hidden" />
            </label>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)" }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFD700] text-black font-bold px-6 py-3 rounded-md shadow-md text-lg transition-all duration-300 hover:bg-[#FF5733] hover:text-white"
            >
              {isSubmitting ? "Submitting..." : <><FaMicrophoneAlt className="inline-block mr-2" /> Submit Your Voice</>}
            </motion.button>
          </form>
        </div>

        {/* Success Message */}
        {successMessage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="mt-4 text-green-500 font-semibold"
          >
            <FaCheckCircle className="inline-block mr-2" /> {successMessage}
          </motion.div>
        )}
      </div>
    </section>
  );
}
