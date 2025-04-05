const express=require("express");
const router=express.Router();
const unitedngoController=require("../controllers/unitedngoController");
//Routes
router.post("/submit-query",unitedngoController.submitQuery);
module.exports=router;