import React from 'react';
import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';
const ProfilePage = () => {
    const fetchUserProfile = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.warn('No token found in localStorage');
            return;
          }
      
          const res = await axios.get('http://localhost:3000/api/auth/profile', {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ must start with Bearer
            },
          });
      
          console.log('User profile:', res.data);
          return res.data;
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
      };
      
   const user=fetchUserProfile(); 
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={user.image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">
            {user.name} <span className="text-sm text-indigo-600">({user.role})</span>
          </h1>
          <p className="text-gray-600 mt-1">{user.email}</p>
          <p className="text-sm text-gray-400 mt-1">📍 {user.location}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-indigo-700">About</h2>
            <p className="text-gray-700 mt-1">{user.bio}</p>
          </div>

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

          <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
