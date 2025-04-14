import { motion } from "framer-motion";
import Navbar from './navbar/Navbar';
import {Link} from "react-router-dom";
const HeroSection = () => {
  return (
    <>
  
    <div className=" w-full  mx-auto h-auto shadow-2xl">
      {/* Hero Section Wrapper with Small Gap */}
      <div className="relative w-full h-auto bg-gray-900 overflow-visible p-6 md:p-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-[12px]" 
          style={{ backgroundImage: "url('/Connect.png')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-[12px]"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-white text-center">
          <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-12">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[40px] md:text-[50px] font-bold drop-shadow-lg"
              >
                Uniting NGOs & Changemakers <br className="hidden md:block"/> for a Better Tomorrow
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl drop-shadow-md"
              >
                Collaboration is the key to lasting social impact. Our platform bridges the gap between NGOs, volunteers, and donors - creating a space where ideas turn into action and dreams become reality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl drop-shadow-md"
              >
                Whether you're an organization seeking support, a volunteer looking to contribute, or a donor ready to make a difference, together, we can build a stronger, more compassionate world.
              </motion.p>
              <Link to="/about">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-6 mb-10 px-6 py-3 bg-white text-black rounded-full text-lg font-medium shadow-lg hover:bg-gray-200 transition"
                >
                  Know More
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section - Stretched Across Entire Width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="relative z-10 w-full px-6 mt-8"
        >
          <div className="w-full flex justify-between items-center text-center bg-black/30 backdrop-blur-md py-4 rounded-lg">
            <div className="flex-1">
              <p className="text-3xl text-white font-bold drop-shadow-lg">100+</p>
              <p className="text-md drop-shadow-md">Completed Projects</p>
            </div>
            <div className="flex-1">
              <p className="text-3xl text-white font-bold drop-shadow-lg">2+</p>
              <p className="text-md drop-shadow-md">Years of Expertise</p>
            </div>
            <div className="flex-1">
              <p className="text-3xl text-white font-bold drop-shadow-lg">100+</p>
              <p className="text-md drop-shadow-md">Sponsors</p>
            </div>
            <div className="flex-1">
              <p className="text-3xl text-white font-bold drop-shadow-lg">4.25/5</p>
              <p className="text-md drop-shadow-md">User Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
