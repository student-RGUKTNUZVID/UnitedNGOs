import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import MainLayout from "./components/layouts/MainLayout";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/pages/Home";
//import { ContactUs } from "./components/pages/ContactUs";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import SearchUnite from "./components/SearchAndUnite";
import CampaignBanner from "./components/campain/campaignBanner";
import RaiseYourVoice from "./components/pages/Raise";
import AuthSuccess from "./apicalls/AuthSuccess";
import Hackathons from "./components/pages/Hackathons";
import RegisterHackathon from "./components/pages/RegisterHackathon";
import SuccessStories from "./components/pages/SuccessStories";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/search"
          element={
            <MainLayout>
              <SearchUnite />
            </MainLayout>
          }
        />
        <Route
          path="/campaign"
          element={
            <MainLayout>
              <CampaignBanner />
            </MainLayout>
          }
        />
        <Route
          path="/raise-issue"
          element={
            <MainLayout>
              <RaiseYourVoice />
            </MainLayout>
          }
        />
        <Route
          path="/hackathons"
          element={
            <MainLayout>
              <Hackathons />
            </MainLayout>
          }
        />
        <Route
          path="/register-hackathon"
          element={
            <MainLayout>
              <RegisterHackathon />
            </MainLayout>
          }
        />
        <Route
          path="/success-stories"
          element={
            <MainLayout>
              <SuccessStories />
            </MainLayout>
          }
        />

        {/* Routes WITHOUT Navbar and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
