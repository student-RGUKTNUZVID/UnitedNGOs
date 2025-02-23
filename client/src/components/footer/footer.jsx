import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-purple-300 to-red-200 border-t-2 border-green-300">
      <div className="w-full px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Name */}
        <div className="flex flex-col justify-center items-center gap-2">
          <img src="" alt="NGO Logo" className="h-16" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold text-[#012D6E] tracking-wide">NGO Connect</p>
            <p className="text-sm text-[#890304] font-semibold">Bridging Change, Together</p>
          </div>
        </div>

        {/* Pages Section */}
        <div className="font-serif">
          <h3 className="text-2xl font-semibold text-[#022E6E]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-xl">
            <li><a href="#home" className="text-black hover:text-green-600">Home</a></li>
            <li><a href="#about" className="text-black hover:text-green-600">About</a></li>
            <li><a href="#projects" className="text-black hover:text-green-600">Projects</a></li>
            <li><a href="#partners" className="text-black hover:text-green-600">Partners</a></li>
            <li><a href="#contact" className="text-black hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="font-serif">
          <h3 className="text-2xl font-semibold text-[#022E6E]">Contact</h3>
          <p className="text-black mt-2 text-xl">
            NGO Hub, Central Office, <br />
            Hyderabad, Telangana, <br />
            India, 500001.
          </p>
          <p className="text-black mt-2 text-xl">Email: info@ngoconnect.org</p>
          <p className="text-black mt-2 text-xl">Phone: +91 98765 43210</p>
        </div>

        {/* Social Media Section */}
        <div className="font-serif flex flex-col justify-start items-center md:items-start gap-2">
          <h4 className="text-[#022E6E] font-semibold text-2xl">Follow Us</h4>
          <div className="flex space-x-6 mt-2">
            <a href="#" className="text-black hover:text-[#022E6E]"><FaLinkedin className="h-6 w-6" /></a>
            <a href="#" className="text-black hover:text-black-400"><FaXTwitter className="h-6 w-6" /></a>
            <a href="#" className="text-black hover:text-pink-600"><FaInstagram className="h-6 w-6" /></a>
            <a href="#" className="text-black hover:text-blue-800"><FaGithub className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full border-t border-black py-4 text-center text-black text-lg">
        © {new Date().getFullYear()} NGO Connect. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
