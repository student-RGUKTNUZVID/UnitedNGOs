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

function App() {
  return (
   
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
              <CampaignBanner/>
            </MainLayout>
          }
        />
         <Route
          path="/raise-issue"
          element={
            <MainLayout>
              <RaiseYourVoice/>
            </MainLayout>
          }
        />

        {/* Routes WITHOUT Navbar and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   
  );
}

export default App;
