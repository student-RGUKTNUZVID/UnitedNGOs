import Footer from '../footer/footer'
import Navbar from '../navbar/Navbar';
import Projects from '../../layouts/projects';
import StatsComponent from '../../layouts/Stats';
import TestimonialCarousel from '../../layouts/Stories';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar at the top */}
      <Navbar />
      
      <main className="mt-4 font-inter grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-start px-4 relative border-b border-amber-200 md:mb-[50px] pb-[50px]">
        
        {/* Left Section */}
        <div className="w-full lg:w-[470px] mt-[80px] lg:mt-[140px] flex flex-col items-center lg:items-start">
          
          {/* Heading */}
          <div className="w-full flex flex-col lg:items-start md:leading-[80px] leading-[50px]">
  {/* "CSR MADE" on the same line */}
  <h2 className="text-[50px] md:text-[65px] lg:text-[80px] font-semibold leading-tight text-[#0039A6] tracking-wider">
    CSR <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-black font-semibold">
      MADE
    </span>
  </h2>

  {/* "EASY" on the next line and aligned to the right on large screens */}
  <div className="w-full lg:w-auto flex lg:justify-end lg:-mt-4">
    <span className=" tracking-wider text-[50px] md:text-[65px] lg:text-[80px] ml-[57px] md:ml-[220px] bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-black font-semibold">
      EASY
    </span>
  </div>
</div>
          {/* Description */}
          <p className="text-black mt-4 leading-[20px] font-montserrat max-w-[90%] md:max-w-full text-right mr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras efficitur aliquet tortor, ac dictum massa facilisis ut. 
            Nullam sit amet dui vitae nisi vestibulum blandit at id justo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras efficitur aliquet tortor, ac dictum massa facilisis ut. 
            Nullam sit amet dui vitae nisi vestibulum blandit at id justo.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start w-full">
            <button className="w-[200px] md:w-[250px] lg:w-[300px] h-[50px] md:h-[60px] lg:h-[70px] ml-0 md:ml-[80px] lg:ml-[170px] mt-6 px-6 py-3 bg-[#0039A6] text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center font-montserrat rounded-full shadow hover:bg-blue-900">
              Join Now
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="hero.png"
            alt="Team Illustration"
            className="w-[250px] md:w-[450px] lg:w-[700px] h-auto md:h-[500px] max-w-full"
          />
        </div>
       
      </main>
        <Projects/>
        <StatsComponent/>
        <TestimonialCarousel/>
        <Footer/>
    </div>
  );
};

export default HomePage;
//import Footer from '../footer/footer';
//import Navbar from '../navbar/Navbar';
//import Projects from '../../layouts/projects';
//import StatsComponent from '../../layouts/Stats';
// import TestimonialCarousel from '../../layouts/Stories';

// const HomePage = () => {
//   return (
//     <div className="flex flex-col min-h-screen overflow-x-hidden">
//       {/* Navbar at the top */}
//       <Navbar />
      
//       <div className="flex flex-row flex-1">
//         {/* Sidebar */}
//         <aside className="w-[180px] bg-[#0039A6] text-white p-4 hidden md:block h-full fixed top-[60px]">
//           <nav>
//             <ul className="space-y-3 text-lg font-montserrat">
//               <li><a href="#" className="hover:underline text-white font-semibold">Home</a></li>
//               <li><a href="#" className="hover:underline text-white font-semibold">About Us</a></li>
//               <li><a href="#" className="hover:underline">NGOs</a></li>
//               <li><a href="#" className="hover:underline">Projects</a></li>
//               <li><a href="#" className="hover:underline">Raise Your Issue</a></li>
//               <li><a href="#" className="hover:underline">Upload Your Project</a></li>
//               <li><a href="#" className="hover:underline">Awareness Sessions</a></li>
//               <li><a href="#" className="hover:underline">Hackathons</a></li>
//               <li><a href="#" className="hover:underline">Success Stories</a></li>
//               <li><a href="#" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <div className="flex flex-col flex-1 ml-[180px]">
//           <main className="mt-4 font-inter grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-start px-4 relative border-b border-amber-200 md:mb-[50px] pb-[50px]">
//             {/* Left Section */}
//             <div className="w-full lg:w-[470px] mt-[80px] lg:mt-[140px] flex flex-col items-center lg:items-start">
//               {/* Heading */}
//               <div className="w-full flex flex-col lg:items-start md:leading-[80px] leading-[50px]">
//                 <h2 className="text-[50px] md:text-[65px] lg:text-[80px] font-semibold leading-tight text-[#0039A6] tracking-wider">
//                   CSR <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-black font-semibold">
//                     MADE
//                   </span>
//                 </h2>
//                 <div className="w-full lg:w-auto flex lg:justify-end lg:-mt-4">
//                   <span className="tracking-wider text-[50px] md:text-[65px] lg:text-[80px] ml-[57px] md:ml-[220px] bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-black font-semibold">
//                     EASY
//                   </span>
//                 </div>
//               </div>
//               {/* Description */}
//               <p className="text-black mt-4 leading-[20px] font-montserrat max-w-[90%] md:max-w-full text-right mr-5">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                 Cras efficitur aliquet tortor, ac dictum massa facilisis ut. 
//                 Nullam sit amet dui vitae nisi vestibulum blandit at id justo.
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                 Cras efficitur aliquet tortor, ac dictum massa facilisis ut. 
//                 Nullam sit amet dui vitae nisi vestibulum blandit at id justo.
//               </p>
//               {/* Button */}
//               <div className="flex justify-center lg:justify-start w-full">
//                 <button className="w-[200px] md:w-[250px] lg:w-[300px] h-[50px] md:h-[60px] lg:h-[70px] ml-0 md:ml-[80px] lg:ml-[170px] mt-6 px-6 py-3 bg-[#0039A6] text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center font-montserrat rounded-full shadow hover:bg-blue-900">
//                   Join Now
//                 </button>
//               </div>
//             </div>

//             {/* Right Section - Image */}
//             <div className="relative w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
//               <img
//                 src="hero.png"
//                 alt="Team Illustration"
//                 className="w-[250px] md:w-[450px] lg:w-[700px] h-auto md:h-[500px] max-w-full"
//               />
//             </div>
//           </main>
//           <Projects/>
//           <StatsComponent/>
//           <TestimonialCarousel/>
//           <Footer/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;