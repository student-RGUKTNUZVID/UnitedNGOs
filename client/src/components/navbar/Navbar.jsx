import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Using react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 font-inter border-b border-amber-100">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src="logo.png" alt="logo" className="h-13 w-auto" />
          <h1 className="text-base text-[#00964D] font-inspiration">NGO CONNECT</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-poppins">
          <Link to="/home" className="text-black text-[20px]  font-semibold hover:text-gray-600">
            Home
          </Link>
          <Link to="/ngos" className="text-black text-[20px]  font-semibold  hover:text-gray-600">
            NGOs
          </Link>
          <Link to="/projects" className="text-black text-[20px]  font-semibold  hover:text-gray-600">
            Projects
          </Link>
          <Link to="/complaint" className="text-black text-[20px]  font-semibold  hover:text-gray-600">
            Complaint
          </Link>
          <Link to="/complaint" className="text-black text-[20px]   font-semibold  hover:text-gray-600">
            Complaint
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4 gap-2 font-poppins">
          <button className="px-5  bg-[#00964D] text-white text-xl rounded-[10px] font-medium w-[130px] h-[40px] hover:bg-green-700">
            Donate
          </button>
          <button className="px-5 bg-[#0039A6] text-white text-xl rounded-[10px] font-medium  w-[130px] h-[40px] hover:bg-blue-700">
            Login
          </button>
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
        <nav className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4">
          <Link to="/home" className="text-black text-lg font-medium hover:text-gray-600">
            Home
          </Link>
          <Link to="/ngos" className="text-black text-lg font-medium hover:text-gray-600">
            NGOs
          </Link>
          <Link to="/projects" className="text-black text-lg font-medium hover:text-gray-600">
            Projects
          </Link>
          <Link to="/complaint" className="text-black text-lg font-medium hover:text-gray-600">
            Complaint
          </Link>
          <button className="w-3/4 px-4 py-2 bg-[#00964D] text-white rounded-md font-medium hover:bg-green-700">
            Donate
          </button>
          <button className="w-3/4 px-4 py-2 bg-[#004AAD] text-white rounded-md font-medium hover:bg-blue-700">
            Login
          </button>
        </nav>
      )}
    </header>
  );
}
