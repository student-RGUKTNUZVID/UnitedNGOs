import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axiosInstance from "../utils/axiosInstance";

const LatestSuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axiosInstance.get("/api/success-stories/latest");
        console.log("Success stories response:", response.data); // Add this for debugging
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching success stories:", error);
        setError("Failed to load success stories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No success stories available yet.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Latest Success Stories
          </h2>
          <Link
            to="/success-stories"
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            View All
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {story.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">Impact:</span>
                    <span className="ml-2">{story.impact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{story.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">{story.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">NGO:</span>
                    <span className="ml-2">{story.ngo}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestSuccessStories;
