import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { FaPhoneAlt,FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaComments, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axiosInstance from "../../utils/axiosInstance"
import { FaHandsHelping, FaGlobeAsia, FaUsers } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi"; // Unique heart helping icon
export default function ContactUs() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
          setLocationUrl(mapUrl);
        },
        (error) => {
          console.error("Error fetching location:", error);
          // fallback location (like a default city)
          setLocationUrl("https://www.google.com/maps?q=Hyderabad&z=12&output=embed");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setLocationUrl("https://www.google.com/maps?q=Hyderabad&z=12&output=embed");
    }
  }, []);
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
   
<section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-12 py-16 rounded-xl shadow-2xl  border border-green-700 ring-1 ring-green-500/20">

{/* Sparkle Background Effect */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent pointer-events-none z-0"></div>

{/* Floating NGO Icons */}
<motion.div 
  className="absolute top-4 right-4 text-green-500 text-4xl animate-pulse z-10"
  animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  <FaHandsHelping />
</motion.div>
<motion.div 
  className="absolute bottom-6 left-4 text-green-400 text-3xl animate-bounce z-10"
  animate={{ scale: [1, 1.1, 1], y: [0, -4, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  <FaUsers />
</motion.div>

{/* Floating Chat Bubble */}
<motion.div 
  initial={{ opacity: 0, x: -20 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ delay: 0.5, duration: 1 }}
  className="absolute top-10 left-6 bg-green-600 text-black px-3 py-2 rounded-lg text-sm shadow-md border border-white/10 backdrop-blur-md">
  <FaComments className="inline-block mr-2" /> Need Help? Contact Us!
</motion.div>

<div className="text-center relative z-10">
  <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-300 animate-text drop-shadow-md">
    Let's Connect & Grow
  </h1>

  <motion.div className="w-24 h-1 bg-green-500 mx-auto my-4 rounded-full shadow-lg" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

  <p className="mt-3 text-lg md:text-xl text-gray-300 font-light italic">
    For collaboration, support or volunteering — we’re here for you!
  </p>

  {/* Contact Cards with glow */}
  <div className="flex flex-wrap justify-center mt-8 gap-6">
    {[
      { icon: <FaPhoneAlt />, text: "+91 9390064463" },
      { icon: <FaEnvelope />, text: "contact@ngo-connect.org" },
      { icon: <FaMapMarkerAlt />, text: "IIIT NUZVID, India" },
      { icon: <FaGlobeAsia />, text: "Global Outreach Supported" }
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0], boxShadow: "0 0 15px #22c55e" }}
        className="flex items-center gap-3 bg-gray-800/80 backdrop-blur-md px-6 py-4 rounded-lg shadow-md transition-all border border-green-700 hover:border-white"
      >
        <span className="text-green-400 text-2xl">{item.icon}</span>
        <span className="text-white font-medium">{item.text}</span>
      </motion.div>
    ))}
  </div>

  {/* Enhanced Social Media Icons */}
  <div className="flex justify-center gap-6 mt-6 text-xl">
    {[
      { icon: <FaFacebook />, link: "#" },
      { icon: <FaXTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <GiLoveMystery />, link: "#", title: "Donate Love" }
    ].map((item, index) => (
      <motion.a 
        key={index} 
        href={item.link}
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        title={item.title || ""}
        className="text-green-400 hover:text-white transition-all"
      >
        {item.icon}
      </motion.a>
    ))}
  </div>

  {/* Additional styling on form */}
  <div className="max-w-lg mx-auto mt-8 bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg border border-green-600/40 backdrop-blur-md">
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

      {/* Input styles remain the same with subtle glow */}
      {[{ value: name, setter: setName, type: "text", placeholder: "Name" },
        { value: email, setter: setEmail, type: "email", placeholder: "Email" }].map((input, i) => (
        <input
          key={i}
          type={input.type}
          value={input.value}
          onChange={({ target }) => input.setter(target.value)}
          placeholder={input.placeholder}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-400 shadow-inner"
        />
      ))}

      <textarea
        name="message"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        placeholder="Enter Your Query..."
        rows="4"
        required
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-400 shadow-inner"
      ></textarea>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        disabled={isSubmitting}
        className="bg-green-500 text-black font-bold px-6 py-3 rounded-md shadow-md text-lg transition-all duration-300 hover:bg-green-700 hover:text-white border border-green-300"
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

  {/* Optional Earth Icon Footer */}
  <div className="mt-10 flex justify-center items-center text-green-500 text-xl">
    <FaGlobeAsia className="mr-2" />
    <p>Locate us</p>
  </div>
  <div className="mt-10">
      {locationUrl && (
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src={locationUrl}
          loading="lazy"
          allowFullScreen
        ></iframe>
      )}
    </div>
</div>
</section>
  );
}
