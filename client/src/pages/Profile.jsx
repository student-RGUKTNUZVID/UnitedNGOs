import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [volunteer, setVolunteer] = useState(null);
  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('/api/auth/profile');
        setUser(res.data.user);
        setVolunteer(res.data?.volunteer);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch user profile.");
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const upcoming = [];
    const ongoing = [];

    volunteer?.projects.forEach((project) => {
      const startDate = new Date(project.startDate);
      const endDate = new Date(project.endDate);

      if (startDate > currentDate) {
        upcoming.push(project);
      } else if (currentDate >= startDate && currentDate <= endDate) {
        ongoing.push(project);
      }
    });

    setUpcomingProjects(upcoming);
    setOngoingProjects(ongoing);
  }, [volunteer]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-[100px] mb-16 p-8 bg-white rounded-3xl shadow-xl border border-green-100 animate-fade-in font-dmsans ">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {user.photo ? (
          <img
            src={user.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-400 object-cover shadow-md transition-transform hover:scale-105"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-green-200 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            {user?.userName
              ? user.userName
                  .split(' ')
                  .map(word => word[0])
                  .join('')
                  .toUpperCase()
              : ''}
          </div>
        )}
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-green-800">
              {user.userName}
              <span className="text-sm text-green-500 ml-2">({user.role})</span>
            </h1>
            <p className="text-green-700">{user.email}</p>
            {user.location && <p className="text-sm text-green-500">📍 {user.location}</p>}
          </div>

          {user.bio && (
            <div>
              <h2 className="text-lg font-semibold text-green-700">About</h2>
              <p className="text-gray-600">{user.bio}</p>
            </div>
          )}

          {user.skills?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-green-700">Skills / Causes</h2>
              <ul className="flex flex-wrap gap-2">
                {user.skills.map((skill, idx) => (
                  <li key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {volunteer?.ngos?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-green-700">NGOs & Projects</h2>

              <div>
                <h3 className="font-semibold mt-2 text-sm text-green-600">Upcoming Projects</h3>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {upcomingProjects.map((project, idx) => (
                    <li key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm shadow-sm">
                      {project.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mt-4 text-sm text-green-600">Ongoing Projects</h3>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {ongoingProjects.map((project, idx) => (
                    <li key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm shadow-sm">
                      {project.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-sm text-green-600">NGOs</h3>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {volunteer.ngos.map((ngo, idx) => (
                    <li key={idx} className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm shadow-sm">
                      {ngo.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <button
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition duration-300"
            onClick={handleLogout}
          >
            <FiLogOut />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
