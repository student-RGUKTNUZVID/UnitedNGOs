import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Using react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="  top-0 left-0 w-full z-50 font-inter  bg-black/30 backdrop-blur-md shadow-3xl">
      <div className="container mx-auto flex justify-between items-center px-2 py-2">
        {/* Logo */}
        <div className="flex items-center gap-1 pl-0">
          <img src="logo3.png" alt="logo" className="h-15 w-auto" />
          {/* <h1 className="text-base text-[#00964D] font-inspiration">UnitedNGOs</h1> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-poppins">
          <Link to="/" className=" text-[16px]  font-medium drop-shadow-lg hover:text-gray-600">
            Home
          </Link>
          <Link to="/" className=" text-[16px]  font-medium drop-shadow-lg hover:text-gray-600">
            NGOs
          </Link>
          <Link to="/" className=" text-[16px]  font-medium drop-shadow-lg hover:text-gray-600">
            NGOs
          </Link>
          <Link to="/" className=" text-[16px]  font-medium drop-shadow-lg hover:text-gray-600">
            Ongoing Projects
          </Link>
          <Link to="/" className=" text-[16px]  font-medium drop-shadow-lg hover:text-gray-600">
            Upcoming Projects
          </Link>
          <Link to="/" className=" text-[16px]  font-medium drop-shadow-lg hover:text-gray-600">
            Raise Your Issue
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4 gap-2 font-poppins">
          <button className="px-5  text-black text-xl rounded-[40px] font-medium w-[130px] h-[40px] hover:bg-black hover:text-white">
            Register
          </button>
          <Link to='/login'>
          <button className="px-5 text-black text-xl rounded-[40px] font-medium  w-[130px] h-[40px] hover:bg-black hover:text-white">
            Login
          </button>
          </Link>
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
        <nav className="md:hidden shadow-md flex flex-col items-center py-4 space-y-4 bg-black/60 backdrop-blur-3xl ">
          <Link to="/" className="text-black text-lg font-medium hover:text-gray-600">
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
          </Link> {/* Stats Section */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.9, duration: 1 }}
 className="mt-12 flex flex-wrap justify-center gap-8 text-center"
>
 <div>
   <p className="text-2xl font-bold">100+</p>
   <p className="text-sm">Completed Projects</p>
 </div>
 <div>
   <p className="text-2xl font-bold">2+</p>
   <p className="text-sm">Years of Expertise</p>
 </div>
 <div>
   <p className="text-2xl font-bold">100+</p>
   <p className="text-sm">Sponsors</p>
 </div>
 <div>
   <p className="text-2xl font-bold">4.25/5</p>
   <p className="text-sm">User Rating</p>
 </div>
</motion.div>
          <button className="w-3/4 px-4 py-2 bg-[#00964D] text-white rounded-md font-medium hover:bg-green-700">
            Donate
          </button>
          <Link to='/login'>
            <button className="w-3/4 px-4 py-2 bg-[#004AAD] text-white rounded-md font-medium hover:bg-blue-700">
              Login
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}