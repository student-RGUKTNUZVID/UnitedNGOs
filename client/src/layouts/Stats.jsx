const StatsComponent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-32 justify-center items-center text-black p-6 md:p-12 md:m-5 shadow-xl rounded-lg border border-gray-300">
      {/* Stat 1 */}
      <div className="flex flex-col items-center px-6 text-center">
        <span className="font-bold text-5xl md:text-7xl">999+</span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">No. of Views</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[120px] w-px bg-gray-600"></div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
        <span className="font-bold text-5xl md:text-7xl">999+</span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Completed Projects</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[120px] w-px bg-gray-600"></div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 md:mt-0">
        <span className="font-bold text-5xl md:text-7xl">999+</span>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Beneficiaries</p>
      </div>
    </div>
  );
};

export default StatsComponent;