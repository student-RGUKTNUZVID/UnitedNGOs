
const HeroSection = () => {
    return (
      <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 md:px-12 lg:px-24 pt-12 md:pt-24 pb-12 md:pb-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Uniting NGOs & Changemakers <br className="hidden md:block"/> for a Better Tomorrow
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-medium">
            Collaboration is the key to lasting social impact. Our platform bridges the gap between NGOs, volunteers, and donors - creating a space where ideas turn into action and dreams become reality.
          </p>
          
          <p className="text-md md:text-lg text-gray-300 font-light">
            Whether you're an organization seeking support, a volunteer looking to contribute, or a donor ready to make a difference, together, we can build a stronger, more compassionate world.
          </p>
        </div>
  
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
          <img 
            src="Hero-sectionImage.jpg" 
            alt="NGO Collaboration" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </section>
    );
  };
  
  export default HeroSection;
  