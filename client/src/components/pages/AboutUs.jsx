import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16 bg-white shadow-lg px-6 md:px-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
            <div className="flex items-center gap-2">
          <div className="h-[340px]">
            <div className="h-[3px] w-15 bg-black">

            </div>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Where <br /> NGO’s Unite <br /> Each Other!
            </motion.h1>
            <p className="text-gray-600 mt-4 text-sm md:text-lg leading-relaxed">
              Our NGO is committed to uplifting the underprivileged by providing
              food, education, and healthcare. Through generous donations and
              community efforts, we bring hope and positive change to those in need.
              Together, we strive to create a better, more compassionate world.
            </p>
            <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-800 transition">
              LET'S TALK
            </button>
          </div>
        </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="About.png" // Replace with actual image path
            alt="NGO Collaboration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

      </section>

      {/* Accordion Section */}
      <section className="bg-black text-white py-12 px-6 md:px-16">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6">
    
    {/* Left Side - "Our Services" Title */}
    <h3 className="text-base md:text-lg font-light w-full md:w-1/4 text-left md:text-start">
      Our Services
    </h3>

    {/* Right Side - Accordion */}
    <div className="w-full md:w-3/4">
      {[
        {
          title: "CSR Tax Exemption",
          content: "Empowering Impact, Maximizing Savings – CSR Tax Exemption for a Better Tomorrow!",
        },
        { title: "Donations", content: "Supporting communities through our transparent donation platform." },
        { title: "Serving Poor", content: "Providing food, education, and medical support." },
        { title: "Monthly Campaigns (Location Based)", content: "Find location-based campaigns near you." },
      ].map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full py-3 border-t border-white/40 text-left">
                <span className="font-medium text-lg md:text-xl">{item.title}</span>
                <ChevronUpIcon
                  className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>
              {open && item.content && (
                <Disclosure.Panel className="px-2 py-2 text-gray-300 text-sm md:text-base">
                  {item.content}
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
</section>




      {/* Image Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm md:text-[24px]">
        We strive to serve the poor through donations, providing food, education, and healthcare. Your support brings hope and transforms lives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {[
    { src: "/images/donation.jpg", tagline: "Giving Hope, Changing Lives" },
    { src: "/images/food-drive.jpg", tagline: "Fighting Hunger, One Meal at a Time" },
    { src: "/images/animal-rescue.jpg", tagline: "Rescuing, Caring, and Protecting" },
    { src: "/images/education.jpg", tagline: "Empowering Through Education" },
    { src: "/images/healthcare.jpg", tagline: "Better Health for a Brighter Future" },
    { src: "/images/community.jpg", tagline: "Together, We Make a Difference" },
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={item.src}
        alt="Gallery"
        className="w-full h-40 sm:h-48 md:h-56 object-cover"
      />
      <p className="mt-2 text-sm md:text-base text-center text-gray-700 font-medium">
        {item.tagline}
      </p>
    </motion.div>
  ))}
</div>

      </section>
    </div>
  );
};

export default AboutUs;
