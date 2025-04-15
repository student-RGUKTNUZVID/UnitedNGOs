import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
const UploadCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    ngoName: "",
    description: "",
    state: "",
    city: "",
    startDate: "",
    endDate: "",
    targetImpact: "",
    fundraisingTarget: "",
    agreedToTerms: false,
    banner: null,
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("ngoName", formData.ngoName);
      formPayload.append("description", formData.description);
      formPayload.append("state", formData.state);
      formPayload.append("city", formData.city);
      formPayload.append("startDate", formData.startDate);
      formPayload.append("endDate", formData.endDate);
      formPayload.append("targetImpact", formData.targetImpact);
      formPayload.append("fundraisingTarget", formData.fundraisingTarget);
      formPayload.append("agreedToTerms", formData.agreedToTerms);
      formPayload.append("banner", formData.banner);
      formPayload.append("document", formData.document);
  
      const res = await axiosInstance.post("/upload-campaign", formPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        }});
  
      console.log(res.data);  
      if (res.data) {
        alert("Campaign submitted successfully!");
        setFormData({
          title: "",
          ngoName: "",
          description: "",
          state: "",
          city: "",
          startDate: "",
          endDate: "",
          targetImpact: "",
          fundraisingTarget: "",
          agreedToTerms: false,
          banner: null,
          document: null,
        });
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting campaign:", error);
      alert("An error occurred while submitting the campaign.");
    }
  };
  

  return (
    <div className="min-h-screen bg-white py-26 px-4 md:px-16">
      <div className="max-w-4xl mx-auto bg-[#e6f5ea] p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Upload Your Campaign
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block font-medium text-green-900 mb-1">Campaign Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              placeholder="Enter campaign title"
            />
          </div>

          {/* NGO Name */}
          <div>
            <label className="block font-medium text-green-900 mb-1">NGO Name</label>
            <input
              type="text"
              name="ngoName"
              required
              value={formData.ngoName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              placeholder="Enter your NGO's name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-green-900 mb-1">Campaign Description</label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              placeholder="Describe the campaign goals and activities"
            />
          </div>

          {/* State & City/Village */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-green-900 mb-1">State</label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter state"
              />
            </div>
            <div>
              <label className="block font-medium text-green-900 mb-1">City/Village</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter city or village"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-green-900 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-medium text-green-900 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Target Impact & Fundraising */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-green-900 mb-1">Target Impact</label>
              <input
                type="text"
                name="targetImpact"
                required
                value={formData.targetImpact}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 100 families helped"
              />
            </div>
            <div>
              <label className="block font-medium text-green-900 mb-1">Fundraising Target (INR)</label>
              <input
                type="number"
                name="fundraisingTarget"
                required
                value={formData.fundraisingTarget}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 500000"
              />
            </div>
          </div>

          {/* Campaign Banner */}
          <div>
            <label className="block font-medium text-green-900 mb-1">Campaign Banner Image</label>
            <input
              type="file"
              name="banner"
              accept="image/*"
              required
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Supporting Document */}
          <div>
            <label className="block font-medium text-green-900 mb-1">Supporting Document (PDF)</label>
            <input
              type="file"
              name="document"
              accept=".pdf"
              required
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label className="text-green-800">
              I confirm that all campaign details provided are accurate and truthful.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadCampaign;
