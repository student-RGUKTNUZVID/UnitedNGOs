import Footer from '../footer/footer'
import Navbar from '../navbar/Navbar';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-1 mt-16 px-6 py-12 bg-gradient-to-b from-green-100 to-white text-center">
  <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-lg">
    Welcome to <span className="text-green-600">NGO Connect</span>
  </h1>
  <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
    A collaborative platform empowering NGOs to work together for a better future.
    Join us in making a meaningful impact!
  </p>
  
  <div className="mt-6">
    <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition shadow-md">
      Get Started
    </button>
  </div>
</main>

      
      {/* Footer at the bottom, full width */}
      <Footer />
    </div>
  );
};

export default HomePage;
