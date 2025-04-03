import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Using react-icons
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showExtraMenu, setShowExtraMenu] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50 bg-white shadow-4xl px-0">
      <div className="w-full flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-start gap-2 pl-0">
          <img src="logo3.png" alt="logo" className="h-15 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-poppins">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-gray-700 hover:text-gray-600"}>
            Home
          </NavLink>
          <NavLink to="/ngos" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-gray-700 hover:text-gray-600"}>
            NGOs
          </NavLink>
          <NavLink to="/ongoing-projects" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-gray-700 hover:text-gray-600"}>
            Ongoing Projects
          </NavLink>
          <NavLink to="/upcoming-projects" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-gray-700 hover:text-gray-600"}>
            Upcoming Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-gray-700 hover:text-gray-600"}>
            About Us
          </NavLink>
          <NavLink to="/raise-issue" className={({ isActive }) => isActive ? "text-[#00964D] font-bold" : "text-gray-700 hover:text-gray-600"}>
            Raise Your Issue
          </NavLink>

          {/* More Dropdown Menu */}
 {/* More Dropdown Menu */}
<div className="relative group">
  <button className="text-gray-700 hover:text-gray-600">More</button>
  <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg mt-2 py-2 w-[200px] z-50">
    <NavLink to="/events" className="px-4 py-2 text-black hover:bg-gray-200">
      Events
    </NavLink>
    <NavLink to="/volunteer" className="px-4 py-2 text-black hover:bg-gray-200">
      Volunteer
    </NavLink>
    <NavLink to="/partners" className="px-4 py-2 text-black hover:bg-gray-200">
      Our Partners
    </NavLink>
  </div>
</div>


        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4 font-poppins pr-4">
          <NavLink to="/login">
            <button className="text-black text-[18px] rounded-[40px] font-medium w-[160px] h-[40px] hover:bg-black hover:text-white">
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
