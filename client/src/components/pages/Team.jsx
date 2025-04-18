import React from "react";
const teamMembers = [
  {
    name: "Rupak",
    role: "Full Stack Developer",
    image: "Rupak(Photo).jpg",
  },
  {
    name: "Ganesh",
    role: "Full Stack Developer",
    image: "Ganesh.jpg",
  },
  {
    name: "SaiKumar",
    role: "Full Stack Developer",
    image: "Saikumar(photo).jpg",
  },
  {
    name: "Satya Vamsi",
    role: "Full Stack Developer",
    image: "SatyaVamsi(Photo).jpg",
  },
  {
    name: "Satya Roy",
    role: "UI/UX Designer",
    image: "Satyaroy.jpg",
  },
];
const Team = () => {
  return (
    <section className="bg-white py-26 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 font-montserrat mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
            />
            <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
            <p className="text-gray-600 mt-1">{member.role}</p>
          </div>
        ))} 
        
      </div>
    </section>
  );
};

export default Team;
