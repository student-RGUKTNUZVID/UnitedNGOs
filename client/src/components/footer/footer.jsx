import { FaFacebook, FaLinkedin, FaCaretRight } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-[50px]">
        
        {/* Stay Connected Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-[40px] font-semibold font-montserrat">
            Stay connected
          </h3>
          <div className="flex flex-col sm:flex-row items-center mt-4 md:mt-[30px] gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 w-full sm:w-[350px] h-[45px] md:h-[50px] text-gray-700 outline-none bg-white font-poppins"
            />
            <button className="bg-gradient-to-b from-[#0058FF] to-[#001132] text-[16px] md:text-[20px] px-4 py-2 md:w-[200px] h-[45px] md:h-[50px] font-semibold font-poppins hover:to-black">
              Sign Up
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 md:mt-[50px]">
            <FaXTwitter className="text-xl md:text-2xl cursor-pointer hover:text-gray-300" />
            <FaFacebook className="text-xl md:text-2xl cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="text-xl md:text-2xl cursor-pointer hover:text-gray-300" />
            <FaInstagram className="text-xl md:text-2xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Vertical Divider (Hidden on Small Screens) */}
        <div className="hidden md:block w-px bg-gray-400 h-[230px] mx-6"></div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-xl md:text-[30px] font-semibold font-poppins">Navigate</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-[30px] mt-4">
            {[
              { name: "Portfolio", path: "#" },
              { name: "Projects", path: "#" },
              { name: "About us", path: "/about" },
              { name: "NGOs", path: "#" },
              { name: "Our Team", path: "#" },
              { name: "Contact us", path: "/contact" },
            ].map((link, index) => (
              <Link key={index} to={link.path} className="flex items-center hover:underline text-[16px] md:text-[20px] font-normal font-poppins">
                {link.name} <FaCaretRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 pt-4 text-center text-xs md:text-sm font-poppins">
        <p className="font-semibold text-[14px] md:text-[15px]">
          © 2025 UnitedNGOs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
