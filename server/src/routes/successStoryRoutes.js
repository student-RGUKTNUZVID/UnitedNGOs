import express from "express";
import { getLatestSuccessStories, getAllSuccessStories } from "../controllers/successStoryController.js";

const router = express.Router();

router.get("/latest", getLatestSuccessStories);
router.get("/all", getAllSuccessStories);

export default router; 