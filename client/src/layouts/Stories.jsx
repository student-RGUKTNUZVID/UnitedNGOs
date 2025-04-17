import { useEffect, useState, useRef } from "react";
import axiosInstance from "../utils/axiosInstance";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axiosInstance.get("/get-reviews");
        setTestimonials(res.data);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    intervalRef.current = setInterval(handleNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, testimonials]);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return <div>Loading testimonials...</div>;

  return (
    <div className="relative w-full p-10 bg-white rounded-lg shadow-lg">
      <div className="text-center mx-auto w-full max-w-[1200px]">
        <h2 className="text-3xl font-bold text-[#4CAF50] mb-8">
          Our Testimonials
        </h2>
        <p className="text-xl text-[#444444] italic mb-6">
          "{testimonials[activeIndex].review}"
        </p>
        <h3 className="text-2xl font-bold text-[#333333] mb-1">
          {testimonials[activeIndex].name}
        </h3>
        <p className="text-sm text-[#6b6b6b] mb-4">
          {testimonials[activeIndex].designation || "Supporter"} |{" "}
          {testimonials[activeIndex].city}, {testimonials[activeIndex].state}
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-4 mb-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "bg-[#4CAF50]" : "bg-[#e0e0e0]"
              }`}
            ></div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="mt-8">
          <a
            href="#all-testimonials"
            className="inline-block px-8 py-2 text-lg font-semibold text-[#4CAF50] bg-white border-2 border-[#4CAF50] rounded-full hover:bg-[#4CAF50] hover:text-white transition duration-300"
          >
            View All Testimonials
          </a>
        </div> */}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-[#4CAF50] hover:bg-[#388E3C] transition flex items-center justify-center"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-[#4CAF50] hover:bg-[#388E3C] transition flex items-center justify-center"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
