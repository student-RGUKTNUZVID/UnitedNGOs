import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    review: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axiosInstance.post("/submit-review", formData); // Replace with your deployed backend URL if needed

    if (response.status === 201) {
      alert("Thank you for your Feedback");
      setFormData({ name: "", city: "", state: "", review: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    alert("Server error. Please try again later.");
  }
};


  return (
    <div className="min-h-screen bg-white py-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-500 mb-4">
          Share Your Feedback
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-green-50 border border-green-100 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-green-200 rounded-xl p-3 bg-white focus:ring-green-500 focus:border-green-500"
              placeholder="Your full name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-green-800">
                City/Village
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-green-200 rounded-xl p-3 bg-white focus:ring-green-500 focus:border-green-500"
                placeholder="Enter city or village"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-green-800">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-green-200 rounded-xl p-3 bg-white focus:ring-green-500 focus:border-green-500"
                placeholder="Enter state"
              />
            </div>
          </div>

          <div>
            <label htmlFor="review" className="block text-sm font-medium text-green-800">
              Your Review
            </label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full border border-green-200 rounded-xl p-3 bg-white focus:ring-green-500 focus:border-green-500"
              placeholder="Write your experience or feedback here..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-200 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
