import React from "react";
import { motion } from "framer-motion";
import { FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";

const CampaignCard = ({ ngo }) => {
  const { name, description, targetAmount, collectedAmount, logo, id } = ngo;
  const percentage = Math.min(
    (collectedAmount / targetAmount) * 100,
    100
  ).toFixed(2);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto transition-transform"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt={name} className="w-14 h-14 rounded-full border" />
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
          Raised: ₹{collectedAmount} / ₹{targetAmount}
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full mt-1">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xs mt-1 text-right text-gray-700 dark:text-gray-300">
          {percentage}% funded
        </p>
      </div>
      <Link
        to={`/donate/${id}`}
        className="mt-4 flex w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl text-center font-semibold items-center justify-center gap-2 transition"
      >
        <FaDonate /> Donate Now
      </Link>
    </motion.div>
  );
};

export default CampaignCard;
