import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', userData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      toast.success("Login successful");
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-green-100 font-dmsans">
      <div className="flex w-full max-w-6xl shadow-xl rounded-xl overflow-hidden border border-green-200">
        
        {/* Left Image */}
        <div className="w-1/2 hidden lg:block">
          <img
            src="/loginpage.jpg"
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <label className="block text-sm font-medium text-green-900 mb-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="username@gmail.com"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-green-900 mb-1">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div className="text-right text-sm text-green-500 hover:underline cursor-pointer">
              Forgot Password?
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center justify-center">
            <span className="text-gray-400">or</span>
          </div>

          {/* Google Button Only */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 w-full border border-green-300 bg-white hover:bg-green-50 transition rounded-lg py-3 shadow-sm"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-green-700 font-medium">Sign in with Google</span>
          </button>

          <p className="mt-6 text-center text-green-700">
            Don't have an account?
          </p>

          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => navigate("/register?role=volunteer")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Register as Volunteer
            </button>
            <button
              onClick={() => navigate("/register?role=ngo")}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Register as NGO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
