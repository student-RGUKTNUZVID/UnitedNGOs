import React from "react";
import CampaignList from "./campainList";
import MainLayout from "../../layouts/MainLayout";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";

const dummyNgos = [
  {
    id: "1",
    name: "Helping Hands",
    description: "Support rural education and resources.",
    targetAmount: 100000,
    collectedAmount: 25000,
    logo: "/images/helpinghands.png",
  },
  {
    id: "2",
    name: "Green Earth",
    description: "Reforesting barren lands.",
    targetAmount: 50000,
    collectedAmount: 35000,
    logo: "/images/greenearth.png",
  },
  {
    id: "3",
    name: "Wellness Warriors",
    description: "Medical aid for underprivileged communities.",
    targetAmount: 150000,
    collectedAmount: 65000,
    logo: "/images/wellnesswarriors.png",
  },
  // Add more NGOs here
];

const CampaignsPage = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className=" px-4 sm:px-8 pb-16 bg-white"
      >
        <div className="text-center my-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 flex justify-center items-center gap-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <FaHandsHelping className="text-green-500" /> Active NGO Campaigns
          </motion.h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Join hands and be a part of the change – support these meaningful initiatives.
          </p>
        </div>

        <CampaignList ngos={dummyNgos} />
      </motion.div>
    </MainLayout>
  );
};

export default CampaignsPage;
