import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import axiosInstance from "../utils/axiosInstance";

const LatestSuccessStories = () => {
  // ... existing state and useEffect ...

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Latest Success Stories
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/success-stories")}
            className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-300"
          >
            View All
          </motion.button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {story.description}
                </p>
                <div className="mt-auto space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaUsers className="mr-2 text-green-600" />
                    {story.impact}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-green-600" />
                    {story.duration}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-green-600" />
                    {story.location}
                  </div>
                  <div className="text-xs text-gray-500 pt-2">
                    <strong>By:</strong> {story.ngo}
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