import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axiosInstance.get("/success-stories/all");
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching success stories:", error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-26 px-4 md:px-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#2e7d32] mb-4">
          🌱 Success Stories
        </h1>
        <p className="text-lg text-gray-600">
          Celebrating the impact of completed NGO campaigns
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <motion.div
            key={story._id}
            whileHover={{ scale: 1.02 }}
            className="bg-[#f0fdf4] border border-green-200 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-[#2e7d32] mb-2 line-clamp-1">
                {story.title}
              </h2>
              <p className="text-sm text-gray-700 line-clamp-3 mb-4">
                {story.description}
              </p>

              <div className="mt-auto space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaUsers className="mr-2 text-[#4caf50]" />
                  {story.impact}
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-[#4caf50]" />
                  {story.duration}
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#4caf50]" />
                  {story.location}
                </div>
                <div className="text-xs text-gray-500 pt-2">
                  <strong>By:</strong> {story.ngo}
                </div>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-green-900 bg-green-200 rounded-full w-max">
                  Completed
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Go To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default SuccessStories;
