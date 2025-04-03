import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaCheckCircle,FaClock } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";

const CampaignBanner = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-12">
      {/* Hero Section */}
      <section className="relative bg-[#FDEEDC] p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
  {/* Coins - Enhanced with depth effect */}
  <img src="coin.png" alt="Coin" className="absolute top-4 left-6 w-10 md:w-14 lg:w-16 rotate-[-20deg] opacity-80" />
  <img src="coin.png" alt="Coin" className="absolute bottom-4 left-4 w-12 md:w-16 lg:w-20 rotate-[15deg]" />
  <img src="coin.png" alt="Coin" className="absolute bottom-4 right-4 w-12 md:w-16 lg:w-20 rotate-[-10deg]" />
  <img src="coin.png" alt="Coin" className="absolute top-1/2 left-1/4 w-6 md:w-10 rotate-[10deg] blur-sm opacity-50" />
  <img src="coin.png" alt="Coin" className="absolute bottom-1/3 right-1/3 w-8 md:w-12 rotate-[-15deg] blur-md opacity-60" />

  {/* Left Content */}
  <div className="md:w-1/2 text-left">
    <h2 className="text-2xl md:text-[60px] font-bold text-gray-900 leading-snug tracking-wide">
      <span className="text-red-600 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        THIS YEAR
      </span> <br /> FEED MEALS TO <span className="text-[#FFD700]">3000+ KIDS</span>
    </h2>
    
    <p className="mt-2 text-sm md:text-base text-gray-700">
      Your support helps provide nutritious meals to underprivileged children across various regions.
    </p>

    {/* Golden Divider */}
    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full my-4"></div>

    <button className="mt-3 bg-black text-white px-5 py-2 md:px-6 md:py-3 rounded-md font-semibold shadow-md hover:bg-gray-800 transition">
      DONATE NOW
    </button>
  </div>

  {/* Right Image */}
  <div className="md:w-1/2 mt-6 md:mt-0 relative flex justify-center">
    <div className="relative w-full max-w-xs md:max-w-sm">
      {/* Circular Image */}
      <div className="relative w-full h-[250px] md:h-[450px] md:w-[500px] flex items-center justify-center">
        {/* Border Container */}
        <div className="relative w-full h-full overflow-hidden rounded-full border-b-[2px] border-t-[2px] border-[#FFD700] flex items-center justify-center p-3 shadow-md">
          <div className="w-full h-full flex items-center justify-center">
            <img src="donation.jpeg" alt="Charity Meals" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>

      {/* Badges - Enhanced for better alignment */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="absolute top-3 right-3 bg-white px-3 py-1 md:px-4 md:py-2 rounded-md shadow flex items-center gap-2 text-xs md:text-sm font-medium">
        <FaCheckCircle className="text-green-600" /> VERIFIED NGO's
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="absolute bottom-12 left-3 bg-white px-3 py-1 md:px-4 md:py-2 rounded-md shadow flex items-center gap-2 text-xs md:text-sm font-medium">
        <FaClock className="text-yellow-500" /> TIMELY UPDATES
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="absolute bottom-3 right-3 bg-white px-3 py-1 md:px-4 md:py-2 rounded-md shadow flex items-center gap-2 text-xs md:text-sm font-medium">
        <FaDonate className="text-black" /> TAX EXEMPTION
      </motion.div>
    </div>
  </div>
</section>





      {/* Search Bar */}
      <div className="mt-6 max-w-2xl mx-auto relative">
        <input
          type="text"
          placeholder="Search by Campaign Title or NGO Name"
          className="w-full px-4 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <FaSearch className="w-5 h-5 absolute right-4 top-3 text-gray-500" />
      </div>

      {/* Medical Emergencies Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900">MEDICAL EMERGENCIES</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="camp.jpeg" // Replace with actual image
                alt="Medical Emergency"
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="mt-2 text-sm text-gray-700">
                This 3-year-old needs urgent medical help. Your support can save a life.
              </p>
              <div className="flex justify-between mt-3">
                <span className="text-green-600 font-semibold">₹20,000 raised</span>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">DONATE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
