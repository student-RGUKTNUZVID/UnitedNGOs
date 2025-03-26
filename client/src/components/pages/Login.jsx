import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center font-dmsans">
      <div
        className="bg-[#1E2A3A] flex justify-center items-center rounded-2xl border-2 border-[#0A192F] p-8 shadow-lg w-[1322px]"
      >
        <div className=" p-8 rounded-xl shadow-lg w-full max-w-md text-white transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-center mb-6">Login Page</h2>
          <form className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative flex items-center">
              <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
              <input
                type="email"
                name="email"
                placeholder="username@gmail.com"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full pl-10 p-3 border rounded-lg  bg-white text-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative flex items-center">
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleInputChange}
                className="w-full pl-10 p-3 border rounded-lg bg-white text-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            </div>

            <div className="text-left text-sm text-gray-400 hover:text-gray-200 cursor-pointer">Forgot Password?</div>

            <button
              type="submit"
              className="w-full bg-[#003465]
              text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">or continue with</div>

          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
              <FcGoogle className="text-red-600 text-3xl" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
              <FaXTwitter className="text-black text-3xl" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
              <FaFacebook className="text-blue-600 text-3xl" />
            </button>
          </div>

          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-200 cursor-pointer hover:underline"
            >
              Register for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
