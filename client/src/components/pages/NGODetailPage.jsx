import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
const NGODetailPage = () => {
  const { id } = useParams();
  const [ngo, setNgo] = useState(null);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchNGO = async () => {
      try {
        const response = await axiosInstance.get(`/ngo/${id}`);
        setNgo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NGO:", error);
        setLoading(false);
      }
    };

    fetchNGO();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading NGO details...</p>;
  if (!ngo) return <p className="text-center mt-10">NGO not found.</p>;

  const { logoURL, name, description, state, city, theme, contactEmail, projects } = ngo;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-black min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Logo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="bg-gray-100 border border-gray-200 p-4 rounded-xl shadow w-60 h-60 flex items-center justify-center">
            <img src={logoURL} alt={name} className="object-contain h-full" />
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-800">{description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div><span className="font-semibold">State:</span> {state}</div>
            <div><span className="font-semibold">City:</span> {city}</div>
            <div><span className="font-semibold">Theme:</span> {theme.join(", ")}</div>
            <div><span className="font-semibold">Email:</span> {contactEmail}</div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {/* {["completed", "ongoing", "upcoming"].map((status) => (
              <div
                key={status}
                className="border p-4 rounded-lg flex justify-between items-center shadow-sm"
              >
                <div className="text-xl font-bold">
                  {projects?.[status]?.length || 0}
                </div>
                <button className="text-blue-600 text-sm underline hover:text-blue-800">
                  View {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              </div>
            ))} */}
            {/* Completed Projects */}
                <div className="border p-4 rounded-lg flex justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">
                    {projects?.completed?.length || 0}
                    </div>
                    <button
                    onClick={() => navigate(`/ngo/completed-projects/${ngo._id}`)}
                    className="text-blue-600 text-sm underline hover:text-blue-800"
                    >
                    View Completed
                    </button>
                </div>

                {/* Ongoing Projects */}
                <div className="border p-4 rounded-lg flex justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">
                    {projects?.ongoing?.length || 0}
                    </div>
                    <button
                    onClick={() => navigate(`/ngo/ongoing-projects/${ngo._id}`)}
                    className="text-blue-600 text-sm underline hover:text-blue-800"
                    >
                    View Ongoing
                    </button>
                </div>

                {/* Upcoming Projects */}
                <div className="border p-4 rounded-lg flex justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">
                    {projects?.upcoming?.length || 0}
                    </div>
                    <button
                    onClick={() => navigate(`/ngo/upcoming-projects/${ngo._id}`)}
                    className="text-blue-600 text-sm underline hover:text-blue-800"
                    >
                    View Upcoming
                    </button>
      </div>
          </div>

          {/* Volunteer Button */}
          <div className="mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm">
              Join As Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODetailPage;
