import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Custom axios instance for API requests
import { FaDonate } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const RaiseCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donateAmount, setDonateAmount] = useState("");

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await axiosInstance.get("/campaigns");
      console.log("Fetched campaigns:", res.data); // Check if data is fetched correctly
      const formatted = res.data.map((campaign) => ({
        id: campaign._id, // Ensure _id is correctly mapped to id
        name: campaign.ngoName,
        description: campaign.description,
        targetAmount: campaign.fundraisingTarget,
        collectedAmount: campaign.collectedAmount,
        logo: campaign.bannerUrl,
      }));
      setCampaigns(formatted);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDonateClick = (campaign) => {
    console.log("Selected campaign:", campaign); // Verify the campaign selected
    setSelectedCampaign(campaign);
    setDonateAmount("");
  };

  const handleDonateSubmit = async () => {
    if (!donateAmount || isNaN(donateAmount) || donateAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    try {
      // Step 1: Create Razorpay order
      const orderRes = await fetch("http://localhost:3000/api/payment/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number(donateAmount) * 100 }),
      });

      const orderData = await orderRes.json();

      // Step 2: Razorpay Payment Options
      const options = {
        key: "rzp_test_NYVES9dBF6XouV", // Your test key
        amount: orderData.amount,
        currency: "INR",
        name: "UNited NGOs",
        description: "Campaign Donation",
        order_id: orderData.id,
        handler: async function (response) {
          // Step 3: Verify payment
          const verifyRes = await fetch("http://localhost:3000/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            // Step 4: Update the campaign's collected amount
            const updatedAmount =
              parseFloat(selectedCampaign.collectedAmount || 0) + parseFloat(donateAmount);
            console.log("Sending updatedAmount to backend:", updatedAmount);

            await axiosInstance.put(`/donate-to-campaigns/${selectedCampaign.id}`, {
              collectedAmount: updatedAmount,
            });

            setCampaigns((prev) =>
              prev.map((c) =>
                c.id === selectedCampaign.id
                  ? { ...c, collectedAmount: updatedAmount }
                  : c
              )
            );

            toast.success("Thank you for your donation!");
            setSelectedCampaign(null);
          } else {
            alert("Payment verification failed.");
          }
        },
        theme: {
          color: "#1c64f2",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong during the donation process.");
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-20 py-10 bg-white dark:bg-gray-900 mt-16">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Ongoing Campaigns</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((ngo) => {
            const percentage = Math.min(
              (ngo.collectedAmount / ngo.targetAmount) * 100,
              100
            ).toFixed(2);

            return (
              <motion.div
                key={ngo.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-2xl shadow-2xl p-6 w-full transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={ngo.logo}
                    alt={ngo.name}
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1>{ngo.title}</h1>
                    <h2 className="text-2xl font-bold text-black dark:text-white">{ngo.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{ngo.description}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Raised: ₹{ngo.collectedAmount} / ₹{ngo.targetAmount}
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
                <div className=" ml-10 flext justify-center items-center text-center">
                <button
                  onClick={() => handleDonateClick(ngo)}
                  className="mt-4 flex w-64  bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl text-center font-semibold items-center justify-center gap-2 transition"
                >
                  <FaDonate /> Donate Now
                </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-2 text-center">
              Donate to {selectedCampaign.name}
            </h2>
            <input
              type="number"
              value={donateAmount}
              onChange={(e) => setDonateAmount(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-4 bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Enter amount in ₹"
            />
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setSelectedCampaign(null)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDonateSubmit}
                className=" bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RaiseCampaign;
