import express from "express";
import multer from "multer";
import {storage} from "../utils/cloudinary.js";
import {submitQuery} from "../controllers/unitedngoController.js";
import {raiseIssue} from "../controllers/unitedngoController.js"
const upload = multer({ storage });
const router=express.Router();

//Routes
router.post("/submit-query",submitQuery);
router.post('/raise-issue', upload.array('media', 5), raiseIssue); //upload.array('media', 5) is used to upload multiple files
export default router;