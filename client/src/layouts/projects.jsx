const Projects = () => {
    return (
        <>
      <section className="py-10 px-4 pt-[40px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-montserrat pb-[30px]">Ongoing Projects</h2>
  
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Project Card */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white shadow-[8px_8px_0px_rgba(0,0,0,0.1)] rounded-lg p-6 text-center flex flex-col items-center w-[300px] h-[400px]  border-grey-100 mb-[50px]"
            >
              <h3 className="text-2xl  mb-2 font-montserrat font-bold">Project-{index}</h3>
              <img
                src="hero.png"
                alt="Project"
                className="rounded-md mb-4"
              />
              <p className="text-sm text-gray-600 font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                auctor erat.
              </p>
              <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-sm shadow-md hover:bg-purple-800 font-poppins font-bold">
                Details
              </button>
            </div>
          ))}
        </div>
  
        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="font-poppins font-bold px-8  bg-[#0039A6] text-white text-[30px] text-center rounded-[30px]  w-[200px] h-[60px] shadow-md hover:bg-blue-800">
            View All
          </button>
        </div>
      </section>
      <section className="py-10 px-4 pt-[40px] border-b border-amber-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-montserrat pb-[30px]">UPcoming Projects</h2>
  
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Project Card */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white shadow-[8px_8px_0px_rgba(0,0,0,0.1)] rounded-lg p-6 text-center flex flex-col items-center w-[300px] h-[400px]  border-grey-100 mb-[50px]"
            >
              <h3 className="text-2xl  mb-2 font-montserrat font-bold">Project-{index}</h3>
              <img
                src="hero.png"
                alt="Project"
                className="rounded-md mb-4"
              />
              <p className="text-sm text-gray-600 font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                auctor erat.
              </p>
              <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-sm shadow-md hover:bg-purple-800 font-poppins font-bold">
                Details
              </button>
            </div>
          ))}
        </div>
  
        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="font-poppins font-bold px-8  bg-[#0039A6] text-white text-[30px] text-center rounded-[30px]  w-[200px] h-[60px] shadow-md hover:bg-blue-800">
            View All
          </button>
        </div>
      </section>
      </>
    );
  };
  
  export default Projects;
  