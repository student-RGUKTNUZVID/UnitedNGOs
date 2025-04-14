import { useEffect, useState, useRef } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
      name: "Tamar Mendelson",
      designation: "Restaurant Critic",
    },
    {
      quote:
        "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
      name: "Joe Charlescraft",
      designation: "Frequent Visitor",
    },
    {
      quote:
        "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
      name: "Martina Edelweist",
      designation: "Satisfied Customer",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  return (
    <div className="relative w-full p-10 bg-white rounded-lg shadow-lg">
      <div className="text-center mx-auto w-full max-w-[1200px]">
        {/* Testimonial Content */}
        <div>
          <p className="text-xl text-[#444444] italic mb-6">
            "{testimonials[activeIndex].quote}"
          </p>
          <h3 className="text-2xl font-bold text-[#333333] mb-1">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-sm text-[#6b6b6b] mb-4">
            {testimonials[activeIndex].designation}
          </p>
        </div>

        {/* Dot Navigation */}
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
        <div className="mt-8">
          <a
            href="#all-testimonials" // You can replace this with your actual URL or an anchor tag to scroll to a section
            className="inline-block px-8 py-2 text-lg font-semibold text-[#4CAF50] bg-white border-2 border-[#4CAF50] rounded-full hover:bg-[#4CAF50] hover:text-white transition duration-300"
          >
            View All Testimonials
          </a>
        </div>
      </div>

      {/* Left and Right Arrow Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-[#4CAF50] hover:bg-[#388E3C] transition flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 fill-[#FFFFFF] transform hover:-rotate-12"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-[#4CAF50] hover:bg-[#388E3C] transition flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 fill-[#FFFFFF] transform hover:rotate-12"
            viewBox="0 0 24 24"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
