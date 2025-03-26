import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {  FaUsers, FaDonate } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

const SearchUnite = () => {
  const [filters, setFilters] = useState({
    state: "Andhra Pradesh",
    cause: "River Cleaning",
    remuneration: "Paid",
    timeline: "28/03/2025",
    city: "Nuzvid",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({
      state: "",
      cause: "",
      remuneration: "",
      timeline: "",
      city: "",
    });
  };

  const projects = [
    {
      title: "Nuzvid Animal Protection and Farm Cleaning",
      neededStaff: 5,
      moneyRequired: "5,000/-",
      moneyNeeded: "6,000/-",
      status: "Unpaid",
      image: "earth.png",
    },
    {
      title: "Grokpeta River Cleaning",
      neededStaff: 8,
      moneyRequired: "7,500/-",
      moneyNeeded: "7,500/-",
      status: "Paid",
      image: "earth.png",
    },
    {
      title: "Urban Waste Management",
      neededStaff: 10,
      moneyRequired: "10,000/-",
      moneyNeeded: "10,000/-",
      status: "Paid",
      image: "earth.png",
    },
    {
      title: "Reforestation Initiative",
      neededStaff: 6,
      moneyRequired: "5,000/-",
      moneyNeeded: "5,000/-",
      status: "Unpaid",
      image: "earth.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Search and Unite for Solution
      </h1>

      {/* Filters */}


      <div>
  {/* Icons Section - Aligned to Start */}
  <div className="flex items-center gap-6 mb-4">
    {/* NGO Connection Symbol */}
    <div className="flex items-center gap-2 cursor-pointer">
      <FaUsers className="text-blue-500 text-2xl" />
      <span className="text-sm font-semibold">NGO Connections</span>
    </div>

    {/* Donate Symbol */}
    <div className="flex items-center gap-2 cursor-pointer">
      <FaDonate className="text-green-500 text-2xl" />
      <span className="text-sm font-semibold">Donate</span>
    </div>
  </div>

  {/* Filters Section - Start Aligned */}
      {/* Filters Section */}
        <div className="w-full max-w-7xl flex flex-wrap justify-start items-center gap-[50px]">
            <div className="flex flex-col justify-center items-start">
                <label htmlFor="">State</label>
          <select
            name="state"
            value={filters.state}
            onChange={handleFilterChange}
            className="p-3 border-b-2 rounded-md text-sm w-full sm:w-auto"
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>
          </div>
          <div className="flex flex-col justify-center items-start">
                <label htmlFor="">State</label>
          <select
            name="cause"
            value={filters.cause}
            onChange={handleFilterChange}
            className="p-3 border-b-2 rounded-md text-sm w-full sm:w-auto"
          >
            <option value="River Cleaning">River Cleaning</option>
            <option value="Animal Protection">Animal Protection</option>
            <option value="Waste Management">Waste Management</option>
          </select>
          </div>

          <div className="flex flex-col justify-center items-start">
                <label htmlFor="">State</label>
          <select
            name="remuneration"
            value={filters.remuneration}
            onChange={handleFilterChange}
            className="p-3 border-b-2 rounded-md text-sm w-full sm:w-auto"
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
          </div>
          <div className="flex flex-col justify-center items-start">
                <label htmlFor="">State</label>
          <select
            name="timeline"
            value={filters.timeline}
            onChange={handleFilterChange}
            className="p-3 border-b-2 rounded-md text-sm w-full sm:w-auto"
          >
            <option value="28/03/2025">28/03/2025</option>
            <option value="15/04/2025">15/04/2025</option>
          </select>
          </div>

          <div className="flex flex-col justify-center items-start">
                <label htmlFor="">State</label>
          <select
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            className="p-3 border-b-2 rounded-md text-sm w-full sm:w-auto"
          >
            <option value="Nuzvid">Nuzvid</option>
            <option value="Vijayawada">Vijayawada</option>
          </select>
          </div>

          {/* Buttons */}
          <button
            onClick={clearFilters}
            className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300"
          >
            <IoClose className="text-red-500" />
            Clear Search
          </button>

          <button className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300">
            <FaHeart className="text-red-500" />
            Favourites
          </button>
        
    
    </div>
</div>


      {/* Results Section */}
      <h2 className="text-lg md:text-xl font-semibold mb-4 mt-4 text-center md:text-left">
        Search Results
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Project List */}
        <div className="space-y-4">
          {projects
            .filter((project) => filters.remuneration === "" || project.status === filters.remuneration)
            .map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow w-full"
              >
                {/* Image Section */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-[180px] h-[150px] rounded-lg object-cover"
                />

                {/* Text & Details Section */}
                <div className="m-4 flex flex-col justify-center items-start text-center md:text-left w-full">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-500">
                    Needed Staff: {project.neededStaff} Members
                  </p>
                  <p className="text-sm text-gray-500">
                    Money Required: {project.moneyRequired}
                  </p>
                  <p className="text-sm text-gray-500">
                    Money Needed: {project.moneyNeeded}
                  </p>
                </div>

                {/* Status Badge */}
                <span
                  className={`px-3 py-1 rounded-lg text-white text-sm ${
                    project.status === "Paid" ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            ))}
        </div>

        {/* Right Side - Map */}
        <div className="w-full h-[300px] md:h-[775px] border rounded-lg overflow-hidden">
          <MapContainer
            key="static-map"
            center={[16.7885, 80.8463]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Markers for Locations */}
            <Marker position={[16.7885, 80.8463]}>
              <Popup>NUZVID ANIMAL PROTECTION</Popup>
            </Marker>
            <Marker position={[16.7, 80.85]}>
              <Popup>GROKPETA RIVER CLEANING</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SearchUnite;
