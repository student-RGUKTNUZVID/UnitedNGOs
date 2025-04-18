import express from "express";
import multer from "multer";
import { storage } from "../utils/cloudinary.js";
import {
  getAllHackathons,
  getHackathonById,
  submitQuery,
  raiseIssue,
  getNGOs,
  getNGObyId,
  getOngoingProjects,
  getUpcomingProjects,
  getNgoCompletedProjects,
  getNgoOngoingProjects,
  getNgoUpcomingProjects,
  submitHackathon,
  submitReview,
  submitCampaign,
  getAllCampaigns,
  donateToCampaign,
  getReviews,
  incrementWebsiteViews,
  getWebsiteStats
} from "../controllers/unitedngoController.js";

const upload = multer({ storage });
const router = express.Router();

// Existing routes
router.post("/submit-query", submitQuery);
router.post('/raise-issue', upload.array('media', 5), raiseIssue);
router.get("/getallngos", getNGOs);
router.get("/ngo/:id", getNGObyId);
router.get("/ongoing-projects", getOngoingProjects);
router.get("/upcoming-projects", getUpcomingProjects);
router.get("/ngo/completed-projects/:id", getNgoCompletedProjects);
router.get("/ngo/ongoing-projects/:id", getNgoOngoingProjects);
router.get("/ngo/upcoming-projects/:id", getNgoUpcomingProjects);
router.post("/register-hackathon", upload.single("image"), submitHackathon);
router.get("/getAllHackathons", getAllHackathons);
router.get('/hackathon/:id', getHackathonById);
router.post('/upload-campaign', upload.fields([
  { name: "banner", maxCount: 1 },
  { name: "document", maxCount: 1 },
]), submitCampaign);
router.get('/campaigns', getAllCampaigns);
router.put('/donate-to-campaigns/:id', donateToCampaign);
router.post('/submit-review', submitReview);
router.get('/get-reviews', getReviews);

// ✅ NEW: Stats Routes
router.post("/api/stats/increment-views", incrementWebsiteViews);
router.get("/api/stats/website-stats", getWebsiteStats);

export default router;
