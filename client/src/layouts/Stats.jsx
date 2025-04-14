import { useState, useEffect, useRef } from "react";

const StatsComponent = () => {
  const [views, setViews] = useState(0);
  const [projects, setProjects] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState(0);

  const statsRef = useRef(null);

  const animateCount = (target, setter) => {
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setter(Math.floor(count));
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(999, setViews);
            animateCount(999, setProjects);
            animateCount(999, setBeneficiaries);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div
      ref={statsRef}
      className="flex flex-col md:flex-row gap-32 justify-center items-center text-black p-6 md:p-12 md:m-5 rounded-lg border border-green-200 bg-white"
      style={{
        boxShadow: "0 10px 20px rgba(76, 175, 80, 0.2)", // Light green shadow
      }}
    >
      {/* Stat 1 */}
      <div className="flex flex-col items-center px-6 text-center">
        <span className="font-bold text-5xl md:text-7xl text-[#388E3C]">
          {views}+
        </span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">No. of Views</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[120px] w-px bg-gray-300"></div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
<<<<<<< HEAD
        <span className="text-green-700 font-bold text-5xl md:text-6xl">999+</span>
=======
        <span className="font-bold text-5xl md:text-7xl text-[#388E3C]">
          {projects}+
        </span>
>>>>>>> b02413e (Changes done)
        <p className="text-gray-400 text-lg md:text-xl mt-2">Completed Projects</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[120px] w-px bg-gray-300"></div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
<<<<<<< HEAD
        <span className="text-green-700 font-bold text-5xl md:text-6xl">999+</span>
=======
        <span className="font-bold text-5xl md:text-7xl text-[#388E3C]">
          {beneficiaries}+
        </span>
>>>>>>> b02413e (Changes done)
        <p className="text-gray-400 text-lg md:text-xl mt-2">Beneficiaries</p>
      </div>
    </div>
  );
};

export default StatsComponent;
<<<<<<< HEAD
// const StatsComponent = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 bg-white text-black py-10 px-6 md:px-12 rounded-xl border border-green-300 shadow-sm">
//       {/* Stat 1 */}
//       <div className="flex flex-col items-center text-center">
//         <span className="text-green-700 font-extrabold text-5xl md:text-6xl">999+</span>
//         <p className="text-gray-600 text-lg mt-2 font-medium">No. of Views</p>
//       </div>

//       {/* Divider */}
//       <div className="hidden md:block h-20 w-px bg-green-300"></div>

//       {/* Stat 2 */}
//       <div className="flex flex-col items-center text-center">
//         <span className="text-green-700 font-extrabold text-5xl md:text-6xl">999+</span>
//         <p className="text-gray-600 text-lg mt-2 font-medium">Completed Projects</p>
//       </div>

//       {/* Divider */}
//       <div className="hidden md:block h-20 w-px bg-green-300"></div>

//       {/* Stat 3 */}
//       <div className="flex flex-col items-center text-center">
//         <span className="text-green-700 font-extrabold text-5xl md:text-6xl">999+</span>
//         <p className="text-gray-600 text-lg mt-2 font-medium">Beneficiaries</p>
//       </div>
//     </div>
//   );
// };

// export default StatsComponent;
=======
>>>>>>> b02413e (Changes done)
