import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
