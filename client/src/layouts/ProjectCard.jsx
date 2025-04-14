// const ProjectCard = ({ title, imageURL, description }) => {
//     return (
//       <div className="bg-white border border-green-200 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] rounded-lg p-6 text-center flex flex-col justify-between items-center w-[300px] h-[400px] mb-[50px] object-fit">
        
//         {/* Title */}
//         <h3 className="text-xl mb-2 font-montserrat font-bold text-green-700">
//           {title}
//         </h3>
  
//         {/* Image */}
//         <img
//           src={imageURL ||"donation.jpeg"}
//           alt="Project"
//           className="rounded-md mb-4 w-full h-[120px] object-cover"
//         />
  
//         {/* Description (with fixed height) */}
//         <p className="text-sm text-gray-700 font-poppins min-h-[60px]">
//           {description?.slice(0, 100) || "No description available."}
//         </p>
  
//         {/* Button always at bottom */}
//         <div className="mt-0.5">
//           <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-sm shadow-md font-poppins font-bold transition">
//             Details
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default ProjectCard;
const ProjectCard = ({ title, imageURL, description }) => {
    return (
      <div className="bg-white border border-green-200 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] rounded-lg p-6 w-[300px] h-[420px] flex flex-col justify-between items-center mb-12">
        
        {/* Title */}
        <div className="h-[40px] flex items-center justify-center mb-2">
          <h3 className="text-xl font-bold font-montserrat text-green-700 text-center">
            {title}
          </h3>
        </div>
  
        {/* Image */}
        <div className="h-[130px] w-full mb-2">
          <img
            src={imageURL || "hero.png"}
            alt="Project"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
  
        {/* Description */}
        <div className="h-[80px] text-sm text-gray-700 font-poppins text-center mb-4 overflow-hidden">
          {description?.slice(0, 160) || "No description available."}
        </div>
  
        {/* Button */}
        <div className="h-[30px] mt-0.5">
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-sm shadow-md font-poppins font-bold transition">
            Details
          </button>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  