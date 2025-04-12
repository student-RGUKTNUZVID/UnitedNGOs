import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hackathons = () => {
  const navigate = useNavigate();
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get("/api/hackathons/active", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHackathons(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch hackathons");
        setLoading(false);
      }
    };

    fetchHackathons();
  }, [navigate]);

  const handleRegister = async (hackathonId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `/api/hackathons/${hackathonId}/register`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Successfully registered for the hackathon!");
    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to register for the hackathon"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00964D]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Hackathons
          </h1>
          <p className="text-xl text-gray-600">
            Join hands with NGOs to create impactful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon._id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={`/uploads/hackathons/${hackathon.image}`}
                  alt={hackathon.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {hackathon.title}
                </h2>
                <div className="h-[72px] mb-4">
                  <p className="text-gray-600 line-clamp-3">
                    {hackathon.description}
                  </p>
                </div>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 flex-shrink-0" />
                    <span className="truncate">
                      {new Date(hackathon.startDate).toLocaleDateString()} -{" "}
                      {new Date(hackathon.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                    <span className="truncate">{hackathon.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2 flex-shrink-0" />
                    <span className="truncate">
                      {hackathon.participants.length}/
                      {hackathon.maxParticipants} participants
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 truncate">
                    Organized by: {hackathon.organizer.name}
                  </span>
                </div>
                <button
                  onClick={() => handleRegister(hackathon._id)}
                  className="mt-6 w-full bg-[#00964D] text-white py-2 px-4 rounded-md hover:bg-[#007a3d] transition-colors"
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
