import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
    <div className="relative overflow-visible">
      <Navbar />
      {children}
      <Footer />
      </div>
    </>
  );
};

export default MainLayout;
