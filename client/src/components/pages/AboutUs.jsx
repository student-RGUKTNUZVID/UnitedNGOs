// import { motion } from "framer-motion";
// import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from "@heroicons/react/24/outline";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen overflow-hidden mt-2">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16 bg-white shadow-lg px-6 md:px-12">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-left">
//             <div className="flex items-center gap-2">
//           <div className="h-[340px]">
//             <div className="h-[3px] w-15 bg-black">

//             </div>
//           </div>
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
//             >
//               Where <br /> NGO’s Unite <br /> Each Other!
//             </motion.h1>
//             <p className="text-gray-600 mt-4 text-sm md:text-lg leading-relaxed">
//               Our NGO is committed to uplifting the underprivileged by providing
//               food, education, and healthcare. Through generous donations and
//               community efforts, we bring hope and positive change to those in need.
//               Together, we strive to create a better, more compassionate world.
//             </p>
//             <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-800 transition">
//               LET'S TALK
//             </button>
//           </div>
//         </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//           <img
//             src="About.png" // Replace with actual image path
//             alt="NGO Collaboration"
//             className="w-full max-w-md md:max-w-lg"
//           />
//         </div>

//       </section>

//       {/* Accordion Section */}
//       <section className="bg-black text-white py-12 px-6 md:px-16">
//   <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6">
    
//     {/* Left Side - "Our Services" Title */}
//     <h3 className="text-base md:text-lg font-light w-full md:w-1/4 text-left md:text-start">
//       Our Services
//     </h3>

//     {/* Right Side - Accordion */}
//     <div className="w-full md:w-3/4">
//       {[
//         {
//           title: "CSR Tax Exemption",
//           content: "Empowering Impact, Maximizing Savings – CSR Tax Exemption for a Better Tomorrow!",
//         },
//         { title: "Donations", content: "Supporting communities through our transparent donation platform." },
//         { title: "Serving Poor", content: "Providing food, education, and medical support." },
//         { title: "Monthly Campaigns (Location Based)", content: "Find location-based campaigns near you." },
//       ].map((item, index) => (
//         <Disclosure key={index}>
//           {({ open }) => (
//             <>
//               <Disclosure.Button className="flex justify-between w-full py-3 border-t border-white/40 text-left">
//                 <span className="font-medium text-lg md:text-xl">{item.title}</span>
//                 <ChevronUpIcon
//                   className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//                 />
//               </Disclosure.Button>
//               {open && item.content && (
//                 <Disclosure.Panel className="px-2 py-2 text-gray-300 text-sm md:text-base">
//                   {item.content}
//                 </Disclosure.Panel>
//               )}
//             </>
//           )}
//         </Disclosure>
//       ))}
//     </div>
//   </div>
// </section>




//       {/* Image Gallery */}
//       <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
//         <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 text-center">
//           Our Mission
//         </h2>
//         <p className="text-gray-600 text-center mb-6 text-sm md:text-[24px]">
//         We strive to serve the poor through donations, providing food, education, and healthcare. Your support brings hope and transforms lives.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//   {[
//     { src: "/images/donation.jpg", tagline: "Giving Hope, Changing Lives" },
//     { src: "/images/food-drive.jpg", tagline: "Fighting Hunger, One Meal at a Time" },
//     { src: "/images/animal-rescue.jpg", tagline: "Rescuing, Caring, and Protecting" },
//     { src: "/images/education.jpg", tagline: "Empowering Through Education" },
//     { src: "/images/healthcare.jpg", tagline: "Better Health for a Brighter Future" },
//     { src: "/images/community.jpg", tagline: "Together, We Make a Difference" },
//   ].map((item, index) => (
//     <motion.div
//       key={index}
//       whileHover={{ scale: 1.05 }}
//       className="rounded-lg overflow-hidden shadow-lg"
//     >
//       <img
//         src={item.src}
//         alt="Gallery"
//         className="w-full h-40 sm:h-48 md:h-56 object-cover"
//       />
//       <p className="mt-2 text-sm md:text-base text-center text-gray-700 font-medium">
//         {item.tagline}
//       </p>
//     </motion.div>
//   ))}
// </div>

//       </section>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600">About Us</h1>
          
          <p className="mt-4 text-lg text-gray-600">
            Connecting NGOs, Empowering Volunteers, and Building a Better Tomorrow.
          </p>
        </div>

        {/* About Section */}
        <section className="bg-white border-l-4 border-green-500 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-green-600">UnitedNGOs</span>, we believe that collaboration is the cornerstone of impactful social change. Our platform brings together NGOs working across diverse themes-education, environment, healthcare, gender equality, rural development, and more-under one digital roof.
            <br /><br />
            {/* We offer a one-stop solution for <span className="text-green-600 font-medium">volunteers</span> to explore and join various causes, and for <span className="text-green-600 font-medium">NGOs</span> to collaborate on projects, share insights, and amplify each other's efforts. */}
            We are a unified space where <span className="text-green-600 font-medium">Volunteers</span> can discover, connect with, and contribute to causes that matter to them, and where <span className="text-green-600 font-medium">NGOs</span> can collaborate, share resources, and strengthen each other's initiatives. Whether you're looking to join a local project, support an awareness campaign, or co-create a new initiative with like-minded organizations, UnitedNGOs is your gateway to collective impact.
          </p>
        </section>
        {/* Mission Section */}
        <section className="bg-white border-l-4 border-green-500 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower volunteers and NGOs by providing a collaborative digital ecosystem that fosters meaningful participation, encourages shared responsibility, and amplifies the impact of social projects across India.
          </p>
        </section>

        {/* Vision Section */}
        <section className="bg-white border-l-4 border-green-500 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become India’s leading collaborative platform where every NGO, regardless of size or location, and every volunteer, regardless of background, can work together seamlessly to drive sustainable and inclusive development.
          </p>
        </section>
      </div>
    </div>
    <section className="relative bg-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Column */}
        <div className="order-2 md:order-1 relative z-10">
          <div className="mb-6">
            <span className="text-green-600 text-lg font-semibold uppercase">About United NGOs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Uniting for Change <br /> Empowering Lives Since 1992
            </h2>
            <p className="text-gray-600 leading-7 mb-6">
              United NGOs is a coalition of committed organizations striving to uplift communities
              across India through education, healthcare, empowerment, and sustainable development.
              We believe in the power of unity to create a lasting impact and bring positive change
              to society.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="pl-8 relative text-gray-800">
                <span className="absolute left-0 top-0 text-green-600 text-lg">&#10003;</span>
                Supporting 500+ grassroots NGOs nationwide
              </li>
              <li className="pl-8 relative text-gray-800">
                <span className="absolute left-0 top-0 text-green-600 text-lg">&#10003;</span>
                Driving change through collaboration & innovation
              </li>
              <li className="pl-8 relative text-gray-800">
                <span className="absolute left-0 top-0 text-green-600 text-lg">&#10003;</span>
                Focused on education, health, and women empowerment
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-green-600 text-white py-3 px-6 font-semibold rounded hover:bg-green-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative order-1 md:order-2">
          {/* Green circular background design */}
          <div className="absolute -top-16 -left-16 w-[450px] h-[450px] rounded-full bg-green-100 z-0"></div>

          <div className="relative z-10 pl-10 pb-10">
            {/* Reduce size of large image */}
            <div className="relative z-20 shadow-lg rounded overflow-hidden mb-4">
              <img
                src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                alt="About Image 1"
                className="w-[80%] object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[220px] z-20 shadow-lg rounded overflow-hidden">
              <img
                src="https://i.ibb.co/JvN0NVB/image-2-about.jpg"
                alt="About Image 2"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
