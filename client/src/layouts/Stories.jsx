import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote: "I didn’t just visit Norway—I experienced its soul. A magical journey through fjords and mountains.",
    author: "H. Sai Kumar",
    role: "Co-Founder, UNGO",
    image: "/profile1.jpg",
  },
  {
    quote: "With this platform, I discovered hidden gems, from Arctic landscapes to cozy Scandinavian villages.",
    author: "Chinta Ganesh",
    role: "Founder, UNGO",
    image: "/profile2.jpg",
  },
  {
    quote: "Exploring the vibrant culture of Norway opened my eyes to new traditions and culinary delights.",
    author: "Shivanarayan Sir",
    role: "Asst Prof, RGUKT",
    image: "logo.png",
  },
  {
    quote: "This journey was breathtaking. Every moment was a new discovery!",
    author: "John Doe",
    role: "Traveler",
    image: "/profile4.jpg",
  },
  {
    quote: "A once-in-a-lifetime experience that changed my perspective on life.",
    author: "Jane Smith",
    role: "Explorer",
    image: "/profile5.jpg",
  },
  {
    quote: "I never thought travel could be this immersive. Highly recommended!",
    author: "Michael Lee",
    role: "Blogger",
    image: "/profile6.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-center py-10 px-4 relative">
      <h2 className="text-[28px] md:text-[35px] font-bold font-montserrat">
        Hear the Success Stories from Team United Ngos
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full mt-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
            display: 'flex',
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 flex justify-center min-w-0"
            >
              <div className="bg-white p-6 shadow-lg rounded-lg text-left w-full min-h-[300px] flex flex-col justify-between border border-gray-200">
                <p className="text-gray-700 text-lg italic">{`"${item.quote}"`}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-lg">{item.author}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-[45%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-10"
        >
          <FaChevronLeft className="text-xl text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-[45%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-10"
        >
          <FaChevronRight className="text-xl text-gray-600" />
        </button>
      </div>

      {/* Donation Section */}
      <div className="bg-gray-100 p-6 rounded-lg mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-left">
          <p className="text-lg font-semibold">Want to Donate?</p>
          <p className="text-gray-500 text-sm">
            Your small contribution can create a big impact — donate now and be the change.
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="px-4 py-2 border border-black rounded-lg">Learn more</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">Donate Us!</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;