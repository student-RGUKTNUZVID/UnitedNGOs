import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Using react-icons
import { motion } from "framer-motion";
import { FaEllipsisV } from "react-icons/fa";
import { useEffect, useRef } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showExtraMenu, setShowExtraMenu] = useState(false);
  const [showDesktopMore, setShowDesktopMore] = useState(false);
  const moreRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (moreRef.current && !moreRef.current.contains(event.target)) {
      setShowDesktopMore(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <header className="top-0 left-0 w-full z-50 bg-white shadow-4xl px-0">
      <div className="w-full flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-start gap-2 pl-0">
          <img src="logo3.png" alt="logo" className="h-15 w-auto" />
        </div>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
<nav className="hidden md:flex space-x-8 font-poppins">
  {[
    { to: "/", label: "Home" },
    { to: "/ngos", label: "NGOs" },
    { to: "/ongoing-projects", label: "Ongoing Projects" },
    { to: "/upcoming-projects", label: "Upcoming Projects" },
    { to: "/about", label: "About Us" },
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
{/* More Dropdown with Icon */}
{/* More Dropdown with Icon - Click based */}
<div className="relative" ref={moreRef}>
  <button
    onClick={() => setShowDesktopMore((prev) => !prev)}
    className="text-gray-700 hover:text-[#00964D] transition duration-300"
  >
    <FaEllipsisV size={18} />
  </button>

  {showDesktopMore && (
    <div className="absolute left-0 top-full flex flex-col bg-white shadow-xl rounded-lg mt-2 py-2 w-[200px] z-50 animate-fade-in">
      <NavLink
        to="/events"
        className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300"
        onClick={() => setShowDesktopMore(false)}
      >
        Events
      </NavLink>
      <NavLink
        to="/volunteer"
        className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300"
        onClick={() => setShowDesktopMore(false)}
      >
        Volunteer
      </NavLink>
      <NavLink
        to="/partners"
        className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300"
        onClick={() => setShowDesktopMore(false)}
      >
        Our Partners
      </NavLink>
    </div>
  )}
</div>


</nav>
        {/* Buttons */}
        <div className="hidden md:flex space-x-4 font-poppins pr-4">
          <NavLink to="/login">
          <button className="text-black text-[18px] rounded-[40px] font-medium w-[160px] h-[40px] hover:bg-[#00964D] hover:text-white hover:shadow-[0_0_12px_rgba(0,150,77,0.6)] transition-all duration-300">
  Login/Register
</button>

          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden shadow-md flex flex-col items-center py-4 space-y-4 bg-black/60 backdrop-blur-3xl">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-white hover:text-gray-400"}>
            Home
          </NavLink>
          <NavLink to="/ngos" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-white hover:text-gray-400"}>
            NGOs
          </NavLink>
          <NavLink to="/ongoing-projects" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-white hover:text-gray-400"}>
            Ongoing Projects
          </NavLink>
          <NavLink to="/upcoming-projects" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-white hover:text-gray-400"}>
            Upcoming Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-white hover:text-gray-400"}>
            About Us
          </NavLink>
          <NavLink to="/raise-issue" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-white hover:text-gray-400"}>
            Raise Your Issue
          </NavLink>

          {/* Expandable More Menu */}
          <button onClick={() => setShowExtraMenu(!showExtraMenu)} className="text-white">
            {showExtraMenu ? "Hide More" : "More Options"}
          </button>

          {showExtraMenu && (
            <div className="flex flex-col space-y-2">
              <NavLink to="/events" className="text-white hover:text-gray-400">
                Events
              </NavLink>
              <NavLink to="/volunteer" className="text-white hover:text-gray-400">
                Volunteer
              </NavLink>
              <NavLink to="/partners" className="text-white hover:text-gray-400">
                Our Partners
              </NavLink>
            </div>
          )}

          {/* Login/Register Button */}
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
