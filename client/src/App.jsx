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
import RegisterHackathon from "./components/pages/RegisterHackathon";
import SuccessStories from "./components/pages/SuccessStories";
import { ToastContainer } from "react-toastify";
import AllNGOsPage from "./components/pages/allNGOs";
import NGODetailPage from "./components/pages/NGODetailPage";
import OngoingProjects from "./components/pages/OngoingProjects";
import UpcomingProjects from "./components/pages/UpcomingProjects";
import NGOCompletedProjects from "./components/pages/NGOCompletedProjects";
import NGOOngoingProjects from "./components/pages/NGOOngoingProjects";
import NGOUpcomingProjects from "./components/pages/NGOUpcomingProjects";
import ProjectView from "./components/pages/ProjectDetail"
import "react-toastify/dist/ReactToastify.css";
import CampaignCard from "./components/campain/RaiseCampaign";
import DonatePage from "./components/pages/Donation";
import CampaignsPage from "./components/campain/campainPage";
import AwarenessPage from "./pages/Awareness";
import Team from "./components/pages/Team";
import ProfilePage from "./pages/Profile";
import AllHackathons from "./pages/AllHackthons";
import HackathonDetails from "./pages/HackathonDetails";
import VolunteerForm from "./pages/volunteer";
import CollaboratorForm from "./pages/collaborator";
import Testimonials from "./components/pages/Testimonials"
import UploadCampaign from "./components/campain/UploadCampaign";
import RaiseCampaign from "./components/campain/RaiseCampaign";
const DummyNgo = {
  id: "1",
  name: "Helping Hands",
  description: "Support rural education and resources.",
  targetAmount: 100000,
  collectedAmount: 25000,
  logo: { png: "/images/helpinghands-logo.png" },
};
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
          path="/submit-review"
          element={
            <MainLayout>
              <Testimonials />
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
          path="/upload-campaign"
          element={
            <MainLayout>
              <UploadCampaign/>
            </MainLayout>
          }
        />
        {/* <Route
          path="/hackathons"
          element={
            <MainLayout>
              <Hackathons />
            </MainLayout>
          }
        /> */}
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
        <Route
          path="/getallngos"
          element={
            <MainLayout>
              <AllNGOsPage />
            </MainLayout>
          }
        />
        <Route path="/ngo/:id" element={
          <MainLayout>
          <NGODetailPage />
          </MainLayout>
          } />
        <Route path="/ngo/completed-projects/:id" element={
          <MainLayout>
          <NGOCompletedProjects/>
          </MainLayout>
          } />
        <Route path="/ngo/ongoing-projects/:id" element={
          <MainLayout>
          <NGOOngoingProjects />
          </MainLayout>
          } />
        <Route path="/ngo/upcoming-projects/:id" element={
          <MainLayout>
          <NGOUpcomingProjects />
          </MainLayout>
          } />
        <Route
          path="/ongoing-projects"
          element={
            <MainLayout>
              <OngoingProjects/>
            </MainLayout>
          }
        />
        <Route
          path="/upcoming-projects"
          element={
            <MainLayout>
              <UpcomingProjects/>
            </MainLayout>
          }
        />
        <Route
          path="/team"
          element={
            <MainLayout>
              <Team/>
            </MainLayout>
          }
        />
        <Route
          path="/project-view"
          element={
            <MainLayout>
              <ProjectView/>
            </MainLayout>
          }
        />
         <Route
          path="/getAllHackthons"
          element={
            <MainLayout>
              <AllHackathons/>
            </MainLayout>
          }
        />
        <Route
            path="/hackathon/:id"
            element={
              <MainLayout>
                <HackathonDetails />
              </MainLayout>
            }
          />

        

        {/* Routes WITHOUT Navbar and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate/:id" element={<DonatePage />} />
        <Route path="/raise-campaign" element={<RaiseCampaign />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
        <Route path="/collaborator-form" element={<CollaboratorForm />} />

      
      </Routes>
    </>
  );
}

export default App;
