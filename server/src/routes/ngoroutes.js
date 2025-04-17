import express from "express";
import multer from "multer";
import {storage} from "../utils/cloudinary.js";
import { getAllHackathons, getHackathonById, submitQuery} from "../controllers/unitedngoController.js";
import {raiseIssue} from "../controllers/unitedngoController.js"
import {getNGOs} from "../controllers/unitedngoController.js"
import {getNGObyId} from "../controllers/unitedngoController.js"
import {getOngoingProjects} from "../controllers/unitedngoController.js"
import {getUpcomingProjects} from "../controllers/unitedngoController.js"
import {getNgoCompletedProjects} from "../controllers/unitedngoController.js"
import {getNgoOngoingProjects} from "../controllers/unitedngoController.js"
import {getNgoUpcomingProjects} from "../controllers/unitedngoController.js"
import {submitHackathon} from "../controllers/unitedngoController.js"
import {submitReview} from "../controllers/unitedngoController.js"
//import {submitHackathon} from "../controllers/unitedngoController.js"
import {submitCampaign,getAllCampaigns,donateToCampaign} from "../controllers/unitedngoController.js"
import {getReviews} from "../controllers/unitedngoController.js"
const upload = multer({ storage });
const router=express.Router();

//Routes
router.post("/submit-query",submitQuery);
router.post('/raise-issue', upload.array('media', 5), raiseIssue); //upload.array('media', 5) is used to upload multiple files
router.get("/getallngos",getNGOs);
router.get("/ngo/:id",getNGObyId);
router.get("/ongoing-projects",getOngoingProjects);
router.get("/upcoming-projects",getUpcomingProjects);
router.get("/ngo/completed-projects/:id",getNgoCompletedProjects);
router.get("/ngo/ongoing-projects/:id",getNgoOngoingProjects);
router.get("/ngo/upcoming-projects/:id",getNgoUpcomingProjects);
router.post("/register-hackathon",upload.single("image"),submitHackathon);
router.get("/getAllHackathons",getAllHackathons);
router.get('/hackathon/:id', getHackathonById);
router.post('/upload-campaign',upload.fields([  { name: "banner", maxCount: 1 },
{ name: "document", maxCount: 1 },]),submitCampaign);
router.get('/campaigns',getAllCampaigns);
router.put('/donate-to-campaigns/:id',donateToCampaign);
router.post('/submit-review',submitReview);
router.get('/get-reviews',getReviews);
export default router;