import React from "react";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate,useLocation} from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
const NGOUpcomingProjects = () => {
    const { id } = useParams();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const {state}=useLocation();
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchNGOUpcomingProjects = async () => {
            try {
              const response = await axiosInstance.get(`/ngo/upcoming-projects/${id}`);
                setData(response.data.upcoming);
              console.log(response.data.upcoming)
              setLoading(false);
            } catch (error) {
              console.error("Error fetching NGOs:", error);
              setLoading(false);
            }
          };
      
          fetchNGOUpcomingProjects();
    },[])
  return (
    <div className="min-h-screen bg-gray-50 pt-26 py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 relative mb-12">
        Upcoming Projects
        <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-opacity-50"></div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {data.map((project,index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="mt-6">
                <button className="w-full bg-green-500 text-white font-medium py-2 rounded-xl hover:bg-green-500 transition duration-300"
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

export default NGOUpcomingProjects;
