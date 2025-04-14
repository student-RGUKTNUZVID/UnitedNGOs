import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { FiLogOut } from 'react-icons/fi';

const ProfileWidget = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('/api/auth/profile');
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch profile");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return null;

  const initials = user?.userName
    ? user.userName
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
    : '';

  return (
    <div className="relative">
        <div className='flex'>
        <button
  className="w-13 h-13 bg-green-300 text-white rounded-full flex items-center justify-center focus:outline-none"
  onClick={() => navigate('/profile')}
>
  {user.photo ? (
    <img
      src={user.photo}
      alt="Profile"
      className="w-full h-full rounded-full object-cover"
    />
  ) : (
    <span className="font-semibold">{initials}</span>
  )}
</button>
      <div>
      <button
            onClick={handleLogout}
            className="mt-[5px] flex items-center w-full text-center px-4 py-2 text-red-600 hover:bg-gray-100"
          >
        <FiLogOut className="mr-2" />LogOut
          </button>
      </div>
      </div>
     
          

      {/* {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <div className="p-3">
            <p className="font-semibold">{user.userName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
         
        </div>
      )} */}
    </div>
  );
};

export default ProfileWidget;
