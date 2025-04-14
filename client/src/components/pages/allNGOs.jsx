import React, { useState,useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import NGOFilters from "./NGOfilters.jsx";
import axiosInstance from "../../utils/axiosInstance";
const AllNGOsPage = () => {
  const [filters, setFilters] = useState({ state: "", city: "", theme: "" });
  const [ngos,setNgos] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        const response = await axiosInstance.get("/getallngos");
        setNgos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
        setLoading(false);
      }
    };

    fetchNGOs();
    // Show back-to-top button after scrolling
    // const handleScroll = () => {
    //   setShowTopBtn(window.scrollY > 300);
    // };

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
  
      // Get the position of the section relative to the viewport
      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if the user has scrolled past the first part of the section and 
      // whether the section has not completely reached the bottom of the viewport
      if (top < -100) {
        setShowTopBtn(true); // Show the button
      }
  
      // Hide the button when the entire section is scrolled
      if (bottom <= windowHeight) {
        setShowTopBtn(false); // Hide the button
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    

  }, []);
  const unique = (key) =>
    [...new Set(ngos.flatMap((n) => (Array.isArray(n[key]) ? n[key] : [n[key]])))];
  const scrollToTop = () => {
    window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
  };
  
  const filteredNGOs = ngos.filter((n) => {
    return (
      (!filters.state || n.state === filters.state) &&
      (!filters.city || n.city === filters.city) &&
      (!filters.theme || n.theme.includes(filters.theme))
    );
  });

  return (<div className="border-t-4 border-green-100">
    <div ref={sectionRef} className="p-6 max-w-7xl mx-auto bg-white text-gray-800 min-h-screen relative">
  <h1 className="text-3xl font-bold text-green-600 mb-6 border-b-4 border-green-500 inline-block pb-1">
    NGOs Directory
  </h1>

  {/* Filters */}
  <NGOFilters filters={filters} setFilters={setFilters} unique={unique} />

  {/* NGO Cards */}
  {loading ? (
    <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-opacity-50"></div>
  </div>
  ) : (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {(filteredNGOs.length ? filteredNGOs : ngos.slice(0, 6)).map((ngo) => (
        <div
          key={ngo._id || ngo.name}
          className="mb-5 bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500 transition duration-300 hover:shadow-lg flex flex-col h-full"
        >
          <img
            src={ngo.logoURL}
            alt={ngo.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold text-green-700 mt-3">{ngo.name}</h2>
          <p className="text-sm text-gray-700 mb-3 flex-1 line-clamp-3">{ngo.description}</p>
          <div className="mt-0.5 flex justify-between items-center pt-4">
            <button
              onClick={() => navigate(`/ngo/${ngo._id}`)}
              className="mt-2 inline-block px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
            >
              Read More
            </button>
          </div>
          
        </div>
      ))}
    </div>
    
  )}
  {showTopBtn && (
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-green-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-green-700 transition"
        aria-label="Back to Top"
      >
        ↑
      </button>
  )}

  </div>
  </div>
  );
};

export default AllNGOsPage;
