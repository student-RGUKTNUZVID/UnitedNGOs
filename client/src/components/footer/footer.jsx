import {
  FaFacebook,
  FaLinkedin,
  FaCaretRight,
  FaCaretDown,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white text-green-900 py-10 px-6 border-t border-green-200 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-[50px]">
        {/* Left Section: Logo and Address */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between">
          <div>
            <img
              src="LogoNew-3.png"
              alt="Company Logo"
              className="mx-auto md:mx-0 w-[240px] h-auto mb-4 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
            />
            <h3 className="text-2xl font-bold font-montserrat text-green-800 mb-2">
              UnitedNGOs
            </h3>
            <div className="text-sm md:text-base font-poppins space-y-2 text-green-800">
              <p>RGUKT NUZVID, I3 First Floor</p>
              <p>ELURU District, Pin-Code 521202</p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <FaEnvelope className="text-green-600" />
                contact@unitedngos.org
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <FaPhoneAlt className="text-green-600" />
                +91 6302505454
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-green-200 mx-6"></div>

        {/* Right Section: Navigation + Socials */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-[30px] font-semibold font-poppins text-green-800 mb-6">
              Navigate
            </h3>

            {/* Two Rows of Horizontal Links */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 justify-items-center md:justify-items-start">
              {[
                { name: "About us", path: "/about" },
                { name: "NGOs", path: "#" },
                { name: "Our Team", path: "#" },
                { name: "Contact us", path: "/contact" },
              ].map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`group relative inline-flex items-center text-[16px] md:text-[18px] font-poppins font-normal hover:text-green-600 transition-colors ${
                      isActive ? "text-green-700 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                    {isActive ? (
                      <FaCaretDown className="ml-1 w-4 h-4" />
                    ) : (
                      <FaCaretRight className="ml-1 w-4 h-4" />
                    )}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-11 mt-5">
                <a href="https://x.com/United__NGOs" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="text-3xl hover:text-green-600 transition duration-200 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/United__NGOs" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl hover:text-green-600 transition duration-200 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/united-ngos-9b7a86360" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl hover:text-green-600 transition duration-200 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/united__ngos?igsh=MTUwc2VmOHdsMXhkNA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl hover:text-green-600 transition duration-200 cursor-pointer" />
                </a>
              </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-4 text-center text-xs md:text-sm font-poppins text-green-700 border-t border-green-100">
        <p className="font-semibold text-[14px] md:text-[15px]">
          © 2025 UnitedNGOs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
