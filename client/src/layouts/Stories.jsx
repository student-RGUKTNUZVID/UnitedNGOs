import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur aliquet tortor, ac dictum massa facilisis ut.",
    author: "John Doe",
  },
  {
    quote: "This platform has changed the way we work. Highly recommend to anyone looking for efficiency!",
    author: "Jane Smith",
  },
  {
    quote: "Amazing experience! The team was professional, and the results were outstanding.",
    author: "Alice Johnson",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center py-10 px-4 relative">
      <h2 className="text-[40px] font-bold font-montserrat">Success Stories</h2>
      <div className="w-[200px] h-[5px] bg-gray-300 mx-auto my-2 mb-4 rounded-full"></div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full mt-[40px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-full px-4">
              <p className="italic text-gray-700 text-[25px] font-italic font-poppins">{`"${item.quote}"`}</p>
              <p className="font-semibold text-right mt-2 text-2xl">- {item.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-10"
      >
        <FaChevronLeft className="text-xl text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-10"
      >
        <FaChevronRight className="text-xl text-gray-600" />
      </button>

      <div className="w-[200px] h-[5px] bg-gray-300 mx-auto my-2 rounded-full"></div>
    </div>
  );
};

export default TestimonialCarousel;
