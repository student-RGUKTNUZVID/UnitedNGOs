import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance'; // uses token automatically if configured
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [volunteer,setVolunteer]=useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('/api/auth/profile'); // Your backend endpoint
        setUser(res.data.user);
        setVolunteer(res.data.volunteer);
        //console.log("volunteer dtaa",res.data.volunteer); // assuming res.data is the user object
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch user profile.");
      }
    };
    fetchProfile();
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // ✅ Remove token
    navigate('/login'); // ✅ Redirect to login page
  };

  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    
    const upcoming = [];
    const ongoing = [];

    volunteer?.projects.forEach((project) => {
      const startDate = new Date(project.startDate);
      const endDate = new Date(project.endDate);

      if (startDate > currentDate) {
        upcoming.push(project); // Project is upcoming
      } else if (currentDate >= startDate && currentDate <= endDate) {
        ongoing.push(project); // Project is ongoing
      }
    });

    setUpcomingProjects(upcoming);
    setOngoingProjects(ongoing);
  }, [volunteer]);

  if (!user) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
      {user.photo ? (
        <img
  src={user.photo}
  alt="Profile"
  className="w-32 h-32 rounded-full bg-amber-400 border-4 border-indigo-500 object-cover"
/>
) : (
    <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-white text-3xl font-bold">
    {user?.userName
      ? user.userName
          .split(' ')
          .map(word => word[0])
          .join('')
          .toUpperCase()
      : ''}
  </div>
  
)}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">
            {user.userName} <span className="text-sm text-indigo-600">({user.role})</span>
          </h1>
          <p className="text-gray-600 mt-1">{user.email}</p>
          {user.location && <p className="text-sm text-gray-400 mt-1">📍 {user.location}</p>}
          {user.bio && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-indigo-700">About</h2>
              <p className="text-gray-700 mt-1">{user.bio}</p>
            </div>
          )}
          {user.skills?.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-indigo-700">Skills / Causes</h2>
              <ul className="flex flex-wrap gap-2 mt-1">
                {user.skills.map((skill, idx) => (
                  <li key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {
            volunteer.ngos?.length>0&& (
              <div className="mt-4">
              <h2 className="text-lg font-semibold text-indigo-700">Ngos and projects</h2>
              <h3 className='text-red'>Projects</h3>
              <h2 className="font-semibold text-lg">Upcoming Projects</h2>
      <ul className="flex flex-wrap gap-2 mt-1">
        {upcomingProjects.map((project, idx) => (
          <li key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            {project.title}
          </li>
        ))}
      </ul>
      <h2 className="font-semibold text-lg mt-4">Ongoing Projects</h2>
      <ul className="flex flex-wrap gap-2 mt-1">
        {ongoingProjects.map((project, idx) => (
          <li key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            {project.title}
          </li>
        ))}
      </ul>
              <h2>Ngos</h2>
              <ul className="flex flex-wrap gap-2 mt-1">
                {volunteer?.ngos?.map((ngo, idx) => (
                  <li key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                    {ngo.name}
                  </li>
                ))}
              </ul>
            </div>
            )
          }
          <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-orange-700"
          onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
