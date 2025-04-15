import React from "react";
const AboutSection = () => {
  return (
    <>
      <section className="relative bg-white py-15 px-7 md:px-11 overflow-hidden mt-[100px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Content Column */}
          <div className="order-2 md:order-1 relative z-10">
            <div className="mb-6">
              <span className="text-green-600 text-4xl font-semibold uppercase">About-Us</span>
              <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mt-4 mb-6">
              Connecting NGOs, Empowering Volunteers, and <br /> Building a Better Tomorrow.
              </h2>
              <p className="text-gray-600 leading-7 mb-6">
              Who We Are
              At UnitedNGOs, we believe that collaboration is the cornerstone of impactful social change. Our platform brings together NGOs working across diverse themes — education, environment, healthcare, gender equality, rural development, and more — under one digital roof.
              We are a unified space where Volunteers can discover, connect with, and contribute to causes that matter to them, and where NGOs can collaborate, share resources, and strengthen each other's initiatives.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="pl-8 relative text-gray-800">
                  <span className="absolute left-0 top-0 text-green-600 text-lg">&#10003;</span>
                  Supporting 500+ grassroots NGOs nationwide
                </li>
                <li className="pl-8 relative text-gray-800">
                  <span className="absolute left-0 top-0 text-green-600 text-lg">&#10003;</span>
                  Driving change through collaboration & innovation
                </li>
                <li className="pl-8 relative text-gray-800">
                  <span className="absolute left-0 top-0 text-green-600 text-lg">&#10003;</span>
                  Focused on education, health, and women empowerment
                </li>
              </ul>
              
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-16 -left-16 w-[450px] h-[450px] rounded-full bg-green-100 z-0"></div>
            <div className="relative z-10 pl-10 pb-10">
              <div className="relative z-20 shadow-lg rounded overflow-hidden mb-4">
                <img
                  src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                  alt="About Image 1"
                  className="w-[80%] object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[220px] z-20 shadow-lg rounded overflow-hidden">
                <img
                  src="https://i.ibb.co/JvN0NVB/image-2-about.jpg"
                  alt="About Image 2"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Our Vision & Mission Section */}
      <section className="bg-green-50 py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image Blob */}
          <div className="relative">
            <div className="absolute -top-20 -left-10 w-[400px] h-[400px] rounded-full bg-green-100 z-0"></div>
            <img
              src="valunteerr.webp"
              alt="Vision Image"
              className="relative z-10 rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To create a transparent, inclusive, and empowering digital ecosystem where NGOs connect, share,
              and collaborate; and where every individual is encouraged to participate, volunteer, and support
              initiatives that uplift communities across India
              
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
            To become India's leading collaborative platform where every NGO, regardless of size or location,
              and every volunteer, regardless of background, can work together seamlessly to drive sustainable
              and inclusive development.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Platform Features</h2>
          <p className="text-gray-700 text-lg mb-12">
            UnitedNGOs is a centralized ecosystem empowering NGOs, donors, and volunteers to unite for social transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "fa-handshake-angle",
                title: "NGO Coordination",
                desc: "Helping NGOs work together, share resources, and coordinate efforts to maximize impact."
              },
              {
                icon: "fa-heart-circle-check",
                title: "Registered Trust",
                desc: "Government-recognized and transparent trust committed to sustainable community upliftment."
              },
              {
                icon: "fa-box-heart",
                title: "Donation Campaigns",
                desc: "Mobilizing resources for health, hygiene, education, disaster relief and more."
              },
              {
                icon: "fa-users-rays",
                title: "Volunteer Engagement",
                desc: "Allows users to discover, join, and contribute to causes hosted by local NGOs."
              },
              {
                icon: "fa-lightbulb",
                title: "Awareness Campaigns",
                desc: "Organizing drives for public education on health, climate, hygiene, and more."
              },
              {
                icon: "fa-hand-holding-heart",
                title: "Support Diverse Causes",
                desc: "From rural development to women's empowerment, we showcase varied impactful missions."
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
              >
                <i className={`fa-solid ${feature.icon} text-green-600 text-3xl mb-4`}></i>
                <h4 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h4>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
