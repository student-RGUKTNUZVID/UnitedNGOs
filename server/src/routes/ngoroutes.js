import express from "express";
const router=express.Router();
import submitQuery from "../controllers/unitedngoController.js";
//Routes
router.post("/submit-query",submitQuery);
export default router;