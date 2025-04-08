import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ stops default form submission
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', userData);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      toast.success("user registraton successful");
      navigate('/');
    } catch (error) {
      console.error('Registartion failed:', error.response?.data?.message || error.message);
      toast.error(error.response?.data?.msg || error.message);
    }
  }

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center font-dmsans">
      <div className="bg-[#1E2A3A] flex justify-center items-center rounded-2xl border-2 border-[#0A192F] p-8 shadow-lg w-[1322px]">
        <div className="p-8 rounded-xl shadow-lg w-full max-w-md text-white transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
          <form className="space-y-4">
            
            {/* Full Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
              <input
                type="text"
                name="userName"
                placeholder="user name"
                value={userData.userName}
                onChange={handleInputChange}
                className="w-full pl-10 p-3 border rounded-lg bg-white text-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            {/* Email Field */}
<div className="relative">
  <label className="block text-sm font-medium mb-1">Email</label>
  <div className="relative flex items-center">
    <FaEnvelope className="absolute left-3 text-gray-600 text-lg" />
    <input
      type="email"
      name="email"
      placeholder="username@gmail.com"
      value={userData.email}
      onChange={handleInputChange}
      className="w-full pl-10 py-3 border rounded-lg bg-white text-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none leading-none"
    />
  </div>
</div>
{/* Password Field */}
<div className="relative">
  <label className="block text-sm font-medium mb-1">Password</label>
  <div className="relative flex items-center">
    <FaLock className="absolute left-3 text-gray-600 text-lg" />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={userData.password}
      onChange={handleInputChange}
      className="w-full pl-10 py-3 border rounded-lg bg-white text-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none leading-none"
    />
  </div>
</div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative flex items-center">
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={userData.confirmPassword}
                onChange={handleInputChange}
                className="w-full pl-10 p-3 border rounded-lg bg-white text-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#003465] text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Register
            </button>
          </form>

          {/* Social Media Signup */}
          <div className="mt-6 text-center text-gray-400">or continue with</div>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
            onClick={handleGoogleRegister}>
              <FcGoogle className="text-red-600 text-5xl" />
            </button>
            {/* <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
              <FaXTwitter className="text-black text-3xl" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
              <FaFacebook className="text-blue-600 text-3xl" />
            </button> */}
          </div>

          {/* Already have an account? */}
          <p className="mt-4 text-center text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-200 cursor-pointer hover:underline"
            >
              Sign in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
