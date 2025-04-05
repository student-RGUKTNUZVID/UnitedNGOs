import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt,FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaComments, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axiosInstance from "../../utils/axiosInstance"
export default function ContactUs() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const addNewMessage=async()=>{
    try{
      const response=await axiosInstance.post("/submit-query",{
        name,
        email,
        message
      });
      console.log(response.data.newMessage);
      if(response.data && response.data.newMessage){
          console.log("Message sent successfully");
      }
    }catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
    }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMessage();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you! We'll be in touch soon.");
      setTimeout(() => setSuccessMessage(""), 3000);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <section className="relative bg-black text-white px-6 md:px-12 py-16 rounded-xl shadow-xl overflow-hidden">
      {/* Floating Chat Bubble */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-10 left-6 bg-green-600 text-black px-3 py-2 rounded-lg text-sm shadow-md">
        <FaComments className="inline-block mr-2" /> Need Help? Contact Us!
      </motion.div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white drop-shadow-md">
          Contact Us
        </h1>

        <motion.div className="w-24 h-1 bg-green-500 mx-auto my-4 rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

        <p className="mt-3 text-lg md:text-xl text-gray-400 font-light">
          Got a question or want to collaborate? Let's talk!
        </p>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {[
            { icon: <FaPhoneAlt />, text: "+91 9390064463" },
            { icon: <FaEnvelope />, text: "contact@yourproject.com" },
            { icon: <FaMapMarkerAlt />, text: "IIIT NUZVID, India" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }}
              className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg shadow-md transition-all"
            >
              <span className="text-green-400">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6 text-xl">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaXTwitter />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedin />, link: "#" }
          ].map((item, index) => (
            <a key={index} href={item.link} className="text-green-400 hover:text-white transition-all">
              {item.icon}
            </a>
          ))}
        </div>

        <div className="max-w-lg mx-auto mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

                {/* Name Field */}
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={({target})=>{setName(target.value)}}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-500"
                />

                {/* Email Field */}
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={({target})=>{setEmail(target.value)}}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-500"
                />

                {/* Message Field */}
                <textarea
                  name="message"
                  value={message}
                  onChange={({target})=>{setMessage(target.value)}}
                  placeholder="Enter Your Query..."
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-500"
                ></textarea>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 text-black font-bold px-6 py-3 rounded-md shadow-md text-lg transition-all duration-300 hover:bg-green-700 hover:text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

              </form>
        </div>

        
        {/* Success Message */}
        {successMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-400 font-semibold">
            {successMessage}
          </motion.div>
        )}

        {/* Newsletter Subscription */}
        {/* <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg border border-green-500">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Stay Updated</h3>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:border-green-500" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-green-500 text-black px-4 py-2 rounded-r-md shadow-md hover:bg-green-700 transition-all"
            >
              <FaPaperPlane />
            </motion.button>
          </div>
        </div> */}

        {/* Google Map Embed */}
        <div className="mt-10">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?..."
            loading="lazy"
          ></iframe>
        </div>

        {/* Live Chat Button */}
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-all"
        >
          <FaComments className="text-2xl" />
        </motion.button> */}
      </div>
    </section>
  );
}
