import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CalendarDays, MapPin, Users2, Trophy, Mail, AlertTriangle } from 'lucide-react';

const HackathonDetails = () => {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/hackathon/${id}`);
        setHackathon(res.data.hackathon);
      } catch (err) {
        console.error('Error fetching hackathon details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathon();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-green-600 text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (!hackathon) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-red-500 text-lg font-semibold">Hackathon not found</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white py-12 px-4 sm:px-10 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-green-200 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-green-50 rounded-full opacity-20 blur-2xl -z-10"></div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg shadow-green-200 rounded-3xl p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-8 text-center">
          {hackathon.title}
        </h1>

        {/* Image + Details Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <img
              src={hackathon.image || '/default-hackathon.jpg'}
              alt={hackathon.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg shadow-green-200"
            />
          </div>

          <div className="text-gray-800 space-y-4">
            <p className="text-lg leading-relaxed">{hackathon.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex gap-3 items-start">
                <CalendarDays className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>Start Date:</strong><br />{new Date(hackathon.startDate).toLocaleDateString()}</p>
              </div>

              <div className="flex gap-3 items-start">
                <CalendarDays className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>End Date:</strong><br />{new Date(hackathon.endDate).toLocaleDateString()}</p>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>Location:</strong><br />{hackathon.location}</p>
              </div>

              <div className="flex gap-3 items-start">
                <Users2 className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>Max Participants:</strong><br />{hackathon.maxParticipants}</p>
              </div>

              <div className="flex gap-3 items-start">
                <Trophy className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>Prize:</strong><br />{hackathon.prize}</p>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>Contact Email:</strong><br />{hackathon.contactEmail}</p>
              </div>

              <div className="flex gap-3 items-start">
                <AlertTriangle className="text-green-600 w-5 h-5 mt-1" />
                <p><strong>Requirements:</strong><br />{hackathon.requirements}</p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="inline-block w-4 h-4 mt-1 rounded-full bg-green-600"></span>
                <p><strong>Status:</strong><br />{hackathon.status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-10 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition shadow-md shadow-green-200">
            Register for Hackathon
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails;
