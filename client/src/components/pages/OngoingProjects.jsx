import React from "react";
import {useState,useEffect} from "react";
import axiosInstance from "../../utils/axiosInstance";
import {useLocation,useNavigate} from "react-router-dom";
const OngoingProjects = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const {state}=useLocation();
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchOngoingProjects = async () => {
            try {
              const response = await axiosInstance.get("/ongoing-projects");
              setData(response.data);
              setLoading(false);
            } catch (error) {
              console.error("Error fetching NGOs:", error);
              setLoading(false);
            }
          };
      
          fetchOngoingProjects();
    },[])
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4  mt-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 relative mb-12">
        Ongoing Projects
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-opacity-50"></div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl ml-[45px]">
          {data.map((project) => (
            <div
              key={project.id}
              className="bg-white w-[250px] h-[300px] md:h-[400px] md:w-[350px] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center h-auto w-auto rounded-full">
                <img src="logo.png" alt="project"
                className="w-auto h-auto rounded-full border-2" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="mt-6 text-center">
                <button className=" text-center w-32 bg-green-500 text-white font-medium py-2 rounded-xl hover:bg-green-700 transition duration-300"
                onClick={()=>navigate("/project-view",{state:{ project }})}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default OngoingProjects;
