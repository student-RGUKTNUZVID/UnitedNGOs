import { NavLink } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Using react-icons
import { motion } from "framer-motion";
import ProfileWidget from "../../pages/profileWidget";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showExtraMenu, setShowExtraMenu] = useState(false);
  const [isNGO, setIsNGO] = useState(false);
  const dropdownRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowExtraMenu(false);
      }
    }; 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setIsNGO(userType === "ngo");
  }, []);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
  return (
    <header className="top-0 left-0 w-full bg-white  drop-shadow-xl">
      <div className="w-full flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-start gap-2 pl-2">
          <img src="LogoNew-3.png" alt="logo" className="h-15 w-[190px]" />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-poppins">
          {[
            { to: "/", label: "Home" },
            { to: "/getallngos", label: "NGOs" },
            { to: "/ongoing-projects", label: "Ongoing Projects" },
            { to: "/upcoming-projects", label: "Upcoming Projects" },
            // { to: "/about", label: "About Us" },
            { to: "/raise-issue", label: "Raise Your Issue" },
          ].map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `relative transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  isActive
                    ? "text-[#00964D] font-bold"
                    : "text-gray-700 hover:text-[#00964D]"
                }`
              }
            >
              <span className="hover-underline">{label}</span>
            </NavLink>
          ))}

          {/* More Dropdown */}
          <div className="relative overflow-visible z-50">
            <button
              className="text-gray-700 hover:text-[#00964D] transition duration-300"
              onClick={() => setShowExtraMenu(!showExtraMenu)}
            >
              More
            </button>
            {showExtraMenu && (
              <motion.div
               ref={dropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 top-full bg-green-300 shadow-xl rounded-lg mt-2 py-2 w-[200px] z-[100]"
              >
                <NavLink
                  to="/events"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowExtraMenu(false)}
                >
                  Events
                </NavLink>
                <NavLink
                  to="/volunteer"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowExtraMenu(false)}
                >
                  Volunteer
                </NavLink>
                <NavLink
                  to="/partners"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowExtraMenu(false)}
                >
                  Our Partners
                </NavLink>
                <NavLink
                  to="/hackathons"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowExtraMenu(false)}
                >
                  Hackathons
                </NavLink>
                {isNGO && (
                  <NavLink
                    to="/register-hackathon"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setShowExtraMenu(false)}
                  >
                    Register Hackathon
                  </NavLink>
                )}
                <NavLink
                  to="/success-stories"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowExtraMenu(false)}
                >
                  Success Stories
                </NavLink>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 font-poppins pr-4">
        {isLoggedIn ? (
        <ProfileWidget />
      ) : (
        <NavLink to="/login">
         <button className="text-black text-[18px] rounded-[40px] font-medium w-[160px] h-[40px] hover:bg-[#00964D] hover:text-white hover:shadow-[0_0_12px_rgba(0,150,77,0.6)] transition-all duration-300">
              Login/Register
            </button>
        </NavLink>
      )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden shadow-md flex flex-col items-center py-4 space-y-4 bg-black/60 backdrop-blur-3xl">
          {[
            { to: "/", label: "Home" },
            { to: "/ngos", label: "NGOs" },
            { to: "/ongoing-projects", label: "Ongoing Projects" },
            { to: "/upcoming-projects", label: "Upcoming Projects" },
            // { to: "/about", label: "About Us" },
            { to: "/raise-issue", label: "Raise Your Issue" },
          ].map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00964D] font-bold"
                  : "text-white hover:text-gray-400"
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* More Options */}
          <button
            onClick={() => setShowExtraMenu(!showExtraMenu)}
            className="text-white"
          >
            {showExtraMenu ? "Hide More" : "More Options"}
          </button>

          {showExtraMenu && (
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/events"
                className="text-white hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  setShowExtraMenu(false);
                }}
              >
                Events
              </NavLink>
              <NavLink
                to="/volunteer"
                className="text-white hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  setShowExtraMenu(false);
                }}
              >
                Volunteer
              </NavLink>
              <NavLink
                to="/partners"
                className="text-white hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  setShowExtraMenu(false);
                }}
              >
                Our Partners
              </NavLink>
              <NavLink
                to="/hackathons"
                className="text-white hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  setShowExtraMenu(false);
                }}
              >
                Hackathons
              </NavLink>
              {isNGO && (
                <NavLink
                  to="/register-hackathon"
                  className="text-white hover:text-gray-400"
                  onClick={() => {
                    setIsOpen(false);
                    setShowExtraMenu(false);
                  }}
                >
                  Register Hackathon
                </NavLink>
              )}
              <NavLink
                to="/success-stories"
                className="text-white hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  setShowExtraMenu(false);
                }}
              >
                Success Stories
              </NavLink>
            </div>
          )}

          {/* Login Button */}
          
          <NavLink to="/login">
            <button className="w-[140px] px-4 py-2 bg-black text-white rounded-[40px] font-medium hover:bg-blue-700">
              Login/Register
            </button>
          </NavLink>
        </nav>
      )}
    </header>
  );
}
