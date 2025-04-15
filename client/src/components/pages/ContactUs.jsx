import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHandsHelping, FaGlobeAsia, FaUsers } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        () => {
          setLocationUrl("https://www.google.com/maps?q=Hyderabad&z=12&output=embed");
        }
      );
    } else {
      setLocationUrl("https://www.google.com/maps?q=Hyderabad&z=12&output=embed");
    }
  }, []);

  const addNewMessage = async () => {
    try {
      const response = await axiosInstance.post("/submit-query", {
        name,
        email,
        message,
      });
      if (response.data && response.data.newMessage) {
        console.log("Message sent successfully");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error(error.response.data.message);
      }
    }
  };

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
    <section className="relative bg-white text-green-800 px-6 md:px-12 py-24 rounded-xl shadow-xl border border-green-300">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-transparent to-white opacity-30 pointer-events-none z-0"></div>
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Let's Connect & Grow
        </h1>

        <motion.div
          className="w-24 h-1 bg-green-500 mx-auto my-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        <p className="mt-3 text-lg md:text-xl text-green-700 font-medium italic">
          For collaboration, support or volunteering — we're here for you!
        </p>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {[
            { icon: <FaPhoneAlt />, text: "+91 9390064463" },
            { icon: <FaEnvelope />, text: "contact@ngo-connect.org" },
            { icon: <FaMapMarkerAlt />, text: "IIIT NUZVID, India" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotate: [0, 2, -2, 0],
                boxShadow: "0 0 15px #22c55e",
              }}
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md border border-green-300 hover:border-green-600 transition-all"
            >
              <span className="text-green-600 text-2xl">{item.icon}</span>
              <span className="text-green-800 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          {[
            { icon: <FaXTwitter />, link: "#" },
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Form Section */}
        <div className="max-w-lg mx-auto mt-10 bg-green-50 p-6 rounded-xl shadow-lg border border-green-200">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {[{ value: name, setter: setName, type: "text", placeholder: "Name" },
              { value: email, setter: setEmail, type: "email", placeholder: "Email" }].map((input, i) => (
              <input
                key={i}
                type={input.type}
                value={input.value}
                onChange={({ target }) => input.setter(target.value)}
                placeholder={input.placeholder}
                required
                className="w-full px-4 py-2 rounded-md bg-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            ))}

            <textarea
              name="message"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
              placeholder="Enter Your Query..."
              rows="4"
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-md text-lg transition-all duration-300 hover:bg-green-600"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>

        {/* Success Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 font-semibold"
          >
            {successMessage}
          </motion.div>
        )}

        {/* Map Footer */}
        <div className="mt-10 flex justify-center items-center text-green-600 text-xl">
          <FaGlobeAsia className="mr-2" />
          <p>Locate us</p>
        </div>

        <div className="mt-6">
          {locationUrl && (
            <iframe
              className="w-full h-64 rounded-lg shadow-lg border border-green-300"
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
