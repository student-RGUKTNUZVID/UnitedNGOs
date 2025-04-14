const StatsComponent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-32 justify-center items-center text-black p-6 md:p-12 md:m-5 rounded-lg border border-gray-300">
      {/* Stat 1 */}
      <div className="flex flex-col items-center px-6 text-center">
        <span className="text-green-700 font-bold text-5xl md:text-6xl">999+</span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">No. of Views</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[120px] w-px bg-gray-600"></div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
        <span className="text-green-700 font-bold text-5xl md:text-6xl">999+</span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Completed Projects</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[120px] w-px bg-gray-600"></div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
        <span className="text-green-700 font-bold text-5xl md:text-6xl">999+</span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Beneficiaries</p>
      </div>
    </div>
  );
};

export default StatsComponent;
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
