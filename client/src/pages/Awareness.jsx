import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaGlobe, FaHeartbeat } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import { IoNavigateOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const AwarenessPage = () => {
  const navigate=useNavigate();
  return (
    <MainLayout>
      <section className="bg-gradient-to-br from-green-100 via-white to-green-50 py-26 px-4 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Awareness Videos
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
          Here are some videos in order to get some awreness related to NGOS
        </p>
      </section>

      {/* <section className="py-12 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Why NGOs Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { icon: FaHandsHelping, title: "Support", desc: "Providing aid to communities in need." },
            { icon: FaGlobe, title: "Sustainability", desc: "Promoting green and sustainable futures." },
            { icon: FaHeartbeat, title: "Healthcare", desc: "Ensuring medical care for the underserved." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="bg-gray-100 py-12">
  <h2 className="text-3xl font-bold text-center mb-8">Videos</h2>
  <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
    {/* Video 1 */}
    <motion.div
      className="bg-white p-4 rounded-xl shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/DUTG63pxVpA"
          title="Story 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* <p className="text-lg">uploaded By:Akruthi Ngo</p> */}
      </div>
    </motion.div>

    {/* Video 2 */}
    <motion.div
      className="bg-white p-4 rounded-xl shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/DUTG63pxVpA"
          title="Story 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>

    {/* Video 3 */}
    <motion.div
      className="bg-white p-4 rounded-xl shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/ARMDqv98ak8"
          title="Story 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
    
  </div>
</section>




      {/* <section className="py-12 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">How You Can Help</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">Donate Now</button>
          <button className="bg-green-200 text-green-800 px-6 py-3 rounded-full hover:bg-green-300 transition">Volunteer</button>
          <button className="bg-yellow-200 text-yellow-900 px-6 py-3 rounded-full hover:bg-yellow-300 transition">Partner With Us</button>
        </div>
      </section> */}

      <section className="bg-green-100 py-12 text-center">
        <motion.h2
          className="text-4xl font-bold text-green-800 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Be the Voice. Be the Change.
        </motion.h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Your involvement can ignite hope and spark change across countless communities.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition"
        onClick={()=>{navigate('/raise-campaign')}}>
          Explore Campaigns
        </button>
      </section>
    </MainLayout>
  );
};

export default AwarenessPage;
