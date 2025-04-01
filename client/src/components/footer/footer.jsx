import { FaFacebook, FaLinkedin ,FaCaretRight} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0058FF] to-[#001132] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start md:gap-[50px]">
        {/* Stay Connected Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-[40px] font-semibold font-montserrat">Stay connected</h3>
          <div className="flex items-center mt-[30px]">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 w-[350px] h-[50px] text-gray-700 outline-none bg-white font-poppins"
            />
            <button className="bg-green-600 text-[20px] ml-3 px-4  font-semibold w-[200px] h-[50px] font-poppins">
              SignUp
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-[50px] justify-center md:justify-start">
            <FaXTwitter className="text-2xl w-[50px] h-[40px] cursor-pointer hover:text-gray-300" />
            <FaFacebook className="text-2xl w-[50px] h-[40px] cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="text-2xl w-[50px] h-[40px] cursor-pointer hover:text-gray-300" />
            <FaInstagram className="text-2xl w-[50px] h-[40px] cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-400 h-[230px] mx-6"></div>

        {/* Navigation Links */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-[30px] font-semibold font-poppins">Navigate</h3>
          <div className="grid grid-cols-2 gap-[30px] mt-2">
            <div className="flex items-center"><a href="#" className="hover:underline text-[20px] font-normal font-poppins">Portfolio</a><FaCaretRight className="w-5 h-5"/></div>
            <div className="flex items-center"><a href="#" className="hover:underline text-[20px] font-normal font-poppins">Projects</a><FaCaretRight className="w-5 h-5"/></div>
            <div className="flex items-center"><a href="#" className="hover:underline text-[20px] font-normal font-poppins">About us</a><FaCaretRight className="w-5 h-5"/></div>
            <div className="flex items-center"><a href="#" className="hover:underline text-[20px] font-normal font-poppins">NGOs</a><FaCaretRight className="w-5 h-5"/></div>
            <div className="flex items-center"><a href="#" className="hover:underline text-[20px] font-normal font-poppins">Our Team</a><FaCaretRight className="w-5 h-5"/></div>
           <div className="flex items-center"> <a href="#" className="hover:underline text-[20px] font-normal font-poppins">Contact us</a><FaCaretRight className="w-5 h-5"/></div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className=" mt-6 pt-4 text-center text-sm font-poppins">
        <div className="flex justify-center gap-[100px]">
          {/* <a href="#" className="hover:underline font-semibold text-[15px]">Privacy policy</a>
          <a href="#" className="hover:underline font-semibold text-[15px]">Sitemap</a> */}
        
        <p className=" font-semibold text-[15px]">© 2025 UnitedNGOs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
