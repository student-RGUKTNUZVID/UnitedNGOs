import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [upcomingProjects, setUpcomingProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const ongoingRes = await axiosInstance.get("/ongoing-projects");
        setOngoingProjects(ongoingRes.data.slice(0, 3)); // Show only 3

        const upcomingRes = await axiosInstance.get("/upcoming-projects");
        setUpcomingProjects(upcomingRes.data.slice(0, 3)); // Show only 3
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* Ongoing Projects Section */}
      <section className="py-10 px-4 pt-[40px] border-b border-green-200 m-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-montserrat pb-[30px]">
          Ongoing Projects
        </h2>

        <div className="mr-[100px] ml-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[100px] max-w-6xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <ProjectCard
                key={project._id || index}
                title={project.title}
                imageURL={project.imageURL}
                description={project.description}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="font-poppins font-medium px-8 bg-green-800 text-white text-[20px] text-center rounded-[30px] w-[200px] h-[60px] shadow-md hover:bg-green-600 transition">
            View All
          </button>
        </div>
      </section>


      {/* Upcoming Projects Section */}
      <section className="py-10 px-4 pt-[40px] border-b border-green-200 m-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-montserrat pb-[30px]">
          Upcoming Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[100px] max-w-6xl mx-auto">
          {upcomingProjects.map((project, index) => (
            <ProjectCard
              key={project._id || index}
              title={project.title}
              imageURL={project.imageURL}
              description={project.description}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="font-poppins font-medium px-8 bg-green-800 text-white text-[20px] text-center rounded-[30px] w-[200px] h-[60px] shadow-md hover:bg-green-600 transition">
            View All
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
