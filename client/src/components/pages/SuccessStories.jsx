import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      image: "../../../public/donation.jpeg",
      title: "Clean Water Initiative",
      description:
        "Provided clean drinking water to 5 villages in rural Maharashtra, improving health and quality of life for thousands of residents.",
      impact: "10,000+ people benefited",
      duration: "6 months",
      location: "Maharashtra",
      // image: "water.jpg",
      ngo: "WaterForAll",
    },
    {
      id: 2,
      image: "../../../public/coin.png",
      title: "Education for All",
      description:
        "Built and equipped 3 schools in remote areas of Rajasthan, providing quality education to children who previously had no access to schools.",
      impact: "500+ children enrolled",
      duration: "1 year",
      location: "Rajasthan",
      // image: "education.jpg",
      ngo: "EduCare",
    },
    {
      id: 3,
      image: "../../../public/coin.png",
      title: "Healthcare Access",
      description:
        "Set up mobile clinics serving 15 villages in Uttar Pradesh, bringing essential medical services to underserved communities.",
      impact: "20,000+ medical consultations",
      duration: "8 months",
      location: "Uttar Pradesh",
      // image: "healthcare.jpg",
      ngo: "HealthFirst",
    },
    {
      id: 4,
      image: "../../../public/coin.png",
      title: "Women Empowerment",
      description:
        "Trained 200 women in vocational skills and entrepreneurship, enabling them to start their own businesses and achieve financial independence.",
      impact: "150+ women started businesses",
      duration: "1 year",
      location: "Kerala",
      // image: "women.jpg",
      ngo: "EmpowerHer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600">
            Celebrating the impact of completed campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {story.title}
                </h2>
                <div className="h-[72px] mb-4">
                  <p className="text-gray-600 line-clamp-3">
                    {story.description}
                  </p>
                </div>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2 flex-shrink-0" />
                    <span className="truncate">{story.impact}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 flex-shrink-0" />
                    <span className="truncate">{story.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                    <span className="truncate">{story.location}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 truncate">
                    By: {story.ngo}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
