import { useState, useEffect, useRef } from "react";

// Replace with your actual backend URL
const API_BASE_URL = "https://unitedngos-1.onrender.com";

const StatsComponent = () => {
  const [views, setViews] = useState(0);
  const [projects, setProjects] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Increment view count by calling the API
  const incrementViews = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/stats/increment-views`, {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to increment views");
      }

      const data = await res.json();
      console.log("Updated view count:", data.views);
      setViews(data.views); // Update views state with the new count
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  };

  // Fetch current stats from backend
  const fetchStats = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/stats/website-stats`);
      if (!res.ok) {
        throw new Error("Failed to fetch stats");
      }
      const data = await res.json();
      setViews(data.views);
      setProjects(data.totalCompletedProjects);
      setVolunteers(data.totalVolunteers);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  // Animate count
  const animateCount = (target, setter) => {
    let count = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(count);
      }
    }, 20);
  };

  useEffect(() => {
    // Increment views when the component is mounted
    incrementViews();
    
    // Fetch stats after incrementing views
    fetchStats();
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      animateCount(views, setViews);
      animateCount(projects, setProjects);
      animateCount(volunteers, setVolunteers);
      setHasAnimated(true);
    }
  }, [hasAnimated, views, projects, volunteers]);

  return (
    <div
      ref={statsRef}
      className="flex flex-col md:flex-row gap-32 justify-center items-center text-black p-6 md:p-12 md:m-5 rounded-lg bg-white"
      style={{
        boxShadow: "0 5px 15px rgba(76, 175, 80, 0.2)",
      }}
    >
      {/* Views */}
      <div className="flex flex-col items-center px-6 text-center">
        <span className="font-bold text-5xl md:text-7xl text-[#388E3C]">
          {views}+ 
        </span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">No. of Views</p>
      </div>

      <div className="hidden md:block h-[120px] w-px bg-gray-300"></div>

      {/* Projects */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
        <span className="font-bold text-5xl md:text-7xl text-[#388E3C]">
          {projects}+
        </span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Completed Projects</p>
      </div>

      <div className="hidden md:block h-[120px] w-px bg-gray-300"></div>

      {/* Volunteers */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
        <span className="font-bold text-5xl md:text-7xl text-[#388E3C]">
          {volunteers}+
        </span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Volunteers</p>
      </div>
    </div>
  );
};

export default StatsComponent;
