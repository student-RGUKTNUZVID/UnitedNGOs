import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NGOFilters from "./NGOfilters.jsx";
import axiosInstance from "../../utils/axiosInstance";

const stateCities = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Kurnool",
    "Tirupati",
    "Rajahmundry",
    "Kakinada",
    "Kadapa",
    "Anantapur",
  ],
  "Arunachal Pradesh": [
    "Itanagar",
    "Naharlagun",
    "Pasighat",
    "Tawang",
    "Bomdila",
    "Ziro",
    "Along",
    "Tezu",
    "Daporijo",
    "Namsai",
  ],
  Assam: [
    "Guwahati",
    "Silchar",
    "Dibrugarh",
    "Jorhat",
    "Nagaon",
    "Tinsukia",
    "Tezpur",
    "Barpeta",
    "Sivasagar",
    "Karimganj",
  ],
  Bihar: [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Purnia",
    "Bihar Sharif",
    "Arrah",
    "Begusarai",
    "Katihar",
  ],
  Chhattisgarh: [
    "Raipur",
    "Bhilai",
    "Bilaspur",
    "Korba",
    "Durg",
    "Raigarh",
    "Rajnandgaon",
    "Ambikapur",
    "Jagdalpur",
    "Chirmiri",
  ],
  Goa: [
    "Panaji",
    "Vasco da Gama",
    "Margao",
    "Mapusa",
    "Ponda",
    "Mormugao",
    "Bicholim",
    "Curchorem",
    "Valpoi",
    "Sanguem",
  ],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Gandhinagar",
    "Anand",
    "Morbi",
  ],
  Haryana: [
    "Faridabad",
    "Gurgaon",
    "Panipat",
    "Ambala",
    "Yamunanagar",
    "Rohtak",
    "Hisar",
    "Karnal",
    "Sonipat",
    "Panchkula",
  ],
  "Himachal Pradesh": [
    "Shimla",
    "Mandi",
    "Solan",
    "Dharamshala",
    "Bilaspur",
    "Kullu",
    "Chamba",
    "Una",
    "Hamirpur",
    "Nahan",
  ],
  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Deoghar",
    "Hazaribagh",
    "Giridih",
    "Ramgarh",
    "Medininagar",
    "Chirkunda",
  ],
  Karnataka: [
    "Bangalore",
    "Mysore",
    "Hubli",
    "Mangalore",
    "Belgaum",
    "Gulbarga",
    "Davanagere",
    "Bellary",
    "Shimoga",
    "Tumkur",
  ],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Kollam",
    "Alappuzha",
    "Palakkad",
    "Kannur",
    "Manjeri",
    "Kottayam",
  ],
  "Madhya Pradesh": [
    "Indore",
    "Bhopal",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    "Sagar",
    "Dewas",
    "Satna",
    "Ratlam",
    "Rewa",
  ],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Solapur",
    "Amravati",
    "Kolhapur",
    "Nanded",
    "Sangli",
  ],
  Manipur: [
    "Imphal",
    "Thoubal",
    "Bishnupur",
    "Churachandpur",
    "Ukhrul",
    "Senapati",
    "Tamenglong",
    "Jiribam",
    "Kakching",
    "Lilong",
  ],
  Meghalaya: [
    "Shillong",
    "Tura",
    "Jowai",
    "Nongstoin",
    "Williamnagar",
    "Baghmara",
    "Nongpoh",
    "Mairang",
    "Resubelpara",
    "Mawkyrwat",
  ],
  Mizoram: [
    "Aizawl",
    "Lunglei",
    "Saiha",
    "Champhai",
    "Kolasib",
    "Serchhip",
    "Lawngtlai",
    "Mamit",
    "Saitual",
    "Khawzawl",
  ],
  Nagaland: [
    "Dimapur",
    "Kohima",
    "Mokokchung",
    "Tuensang",
    "Wokha",
    "Zunheboto",
    "Phek",
    "Mon",
    "Longleng",
    "Kiphire",
  ],
  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Berhampur",
    "Sambalpur",
    "Puri",
    "Balasore",
    "Bhadrak",
    "Baripada",
    "Jharsuguda",
  ],
  Punjab: [
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Pathankot",
    "Hoshiarpur",
    "Batala",
    "Moga",
    "Abohar",
  ],
  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Kota",
    "Bikaner",
    "Ajmer",
    "Udaipur",
    "Bhilwara",
    "Alwar",
    "Bharatpur",
    "Sikar",
  ],
  Sikkim: [
    "Gangtok",
    "Namchi",
    "Mangan",
    "Gyalshing",
    "Rangpo",
    "Singtam",
    "Jorethang",
    "Ravangla",
    "Pelling",
    "Lachen",
  ],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
    "Erode",
    "Vellore",
    "Thoothukudi",
    "Dindigul",
  ],
  Telangana: [
    "Hyderabad",
    "Warangal",
    "Karimnagar",
    "Nizamabad",
    "Khammam",
    "Ramagundam",
    "Mahabubnagar",
    "Nalgonda",
    "Adilabad",
    "Suryapet",
  ],
  Tripura: [
    "Agartala",
    "Udaipur",
    "Dharmanagar",
    "Kailashahar",
    "Belonia",
    "Khowai",
    "Teliamura",
    "Ambassa",
    "Kumarghat",
    "Sabroom",
  ],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Ghaziabad",
    "Agra",
    "Meerut",
    "Varanasi",
    "Allahabad",
    "Noida",
    "Bareilly",
    "Aligarh",
  ],
  Uttarakhand: [
    "Dehradun",
    "Haridwar",
    "Roorkee",
    "Haldwani",
    "Rudrapur",
    "Kashipur",
    "Rishikesh",
    "Ramnagar",
    "Pithoragarh",
    "Srinagar",
  ],
  "West Bengal": [
    "Kolkata",
    "Asansol",
    "Siliguri",
    "Durgapur",
    "Bardhaman",
    "Malda",
    "Habra",
    "Kharagpur",
    "Shantiniketan",
    "Darjeeling",
  ],
};

const AllNGOsPage = () => {
  const [filters, setFilters] = useState({ state: "", city: "", theme: "" });
  const [ngos, setNgos] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [filteredCities, setFilteredCities] = useState([]);

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
  const unique = (key) => [
    ...new Set(
      ngos.flatMap((n) => (Array.isArray(n[key]) ? n[key] : [n[key]]))
    ),
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFilters({ ...filters, state: selectedState, city: "" });
    setFilteredCities(selectedState ? stateCities[selectedState] || [] : []);
  };

  const filteredNGOs = ngos.filter((n) => {
    return (
      (!filters.state || n.state === filters.state) &&
      (!filters.city || n.city === filters.city) &&
      (!filters.theme || n.theme.includes(filters.theme))
    );
  });

  return (
    <div className="border-green-100 mt-20">
      <div
        ref={sectionRef}
        className="p-6 max-w-7xl mx-auto bg-white text-gray-800 min-h-screen relative"
      >
        <h1 className="text-3xl font-bold text-green-600 mb-6 border-b-4 border-green-500 inline-block pb-1">
          NGOs Directory
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <motion.select
            value={filters.state}
            onChange={handleStateChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <option value="">All States</option>
            {Object.keys(stateCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </motion.select>

          <motion.select
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={!filters.state}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <option value="">All Cities</option>
            {filteredCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </motion.select>

          <motion.select
            value={filters.theme}
            onChange={(e) => setFilters({ ...filters, theme: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <option value="">All Themes</option>
            {unique("theme").map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </motion.select>
        </div>

        {/* NGO Cards */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-opacity-50"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {filteredNGOs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  No NGOs found for the selected filters
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or explore other options
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/")}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Back to Home
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
              >
                {filteredNGOs.map((ngo) => (
                  <motion.div
                    key={ngo._id || ngo.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500 transition duration-300 hover:shadow-lg flex flex-col h-full"
                  >
                    <img
                      src={ngo.logoURL}
                      alt={ngo.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="text-xl font-semibold text-green-700 mt-3">
                      {ngo.name}
                    </h2>
                    <p className="text-sm text-gray-700 mb-3 flex-1 line-clamp-3">
                      {ngo.description}
                    </p>
                    <div className="mt-0.5 flex justify-between items-center pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(`/ngo/${ngo._id}`)}
                        className="mt-2 inline-block px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
                      >
                        Read More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {showTopBtn && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="absolute bottom-6 right-6 bg-green-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-green-700 transition"
            aria-label="Back to Top"
          >
            ↑
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default AllNGOsPage;
