import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

// import ngos from "./allngos.json";
import NGOFilters from "./NGOfilters.jsx";
import axiosInstance from "../../utils/axiosInstance";

const AllNGOsPage = () => {
  const [filters, setFilters] = useState({ state: "", city: "", theme: "" });
  const [ngos,setNgos] = useState([]);
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
  }, []);
  const unique = (key) =>
    [...new Set(ngos.flatMap((n) => (Array.isArray(n[key]) ? n[key] : [n[key]])))];

  const filteredNGOs = ngos.filter((n) => {
    return (
      (!filters.state || n.state === filters.state) &&
      (!filters.city || n.city === filters.city) &&
      (!filters.theme || n.theme.includes(filters.theme))
    );
  });

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">NGOs Directory</h1>

      {/* Filters */}
      <NGOFilters filters={filters} setFilters={setFilters} unique={unique} />

      {/* NGO Cards */}
      {loading ? (
        <p>Loading NGOs...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filteredNGOs.length ? filteredNGOs : ngos.slice(0, 6)).map((ngo) => (
            <div
              key={ngo._id || ngo.name}
              className="bg-gray-100 rounded-xl shadow-sm p-4 border border-gray-200"
            >
              <img
                src={ngo.logoURL}
                alt={ngo.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{ngo.name}</h2>
              <p className="text-sm text-gray-900 mb-2 line-clamp-3">
                {ngo.description}
              </p>
              <button
                onClick={() =>
                  navigate(`/ngo/${ngo._id}`)}
                className="mt-2 inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNGOsPage;
