const StatsComponent = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center bg-white p-6 md:p-12 shadow-lg rounded-lg font-montserrat font-normal border-b border-b-amber-200">
        {/* Stat 1 */}
        <div className="flex flex-col items-center px-6">
          <span className="text-[#0039A6] font-bold text-4xl md:text-[120px]">999+</span>
          <p className="text-gray-600 text-[40px] md:text-[30px] mt-1">No. of Views</p>
        </div>
  
        {/* Divider */}
        <div className="hidden md:block h-[137px] w-px bg-gray-300"></div>
  
        {/* Stat 2 */}
        <div className="flex flex-col items-center px-6">
          <span className="text-[#0039A6] font-bold text-4xl md:text-[120px]">999+</span>
          <p className="text-gray-600 text-[100px] md:text-[30px] mt-1">Completed Projects</p>
        </div>
  
        {/* Divider */}
        <div className="hidden md:block h-[137px] w-px bg-gray-300"></div>
  
        {/* Stat 3 */}
        <div className="flex flex-col items-center px-6">
          <span className="text-[#0039A6] font-bold text-4xl md:text-[120px]">999+</span>
          <p className="text-gray-600 text-[100px] md:text-[30px] mt-1">Beneficiaries</p>
        </div>
      </div>
    );
  };
  
  export default StatsComponent;
  