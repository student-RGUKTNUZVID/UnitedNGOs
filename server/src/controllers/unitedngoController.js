// require("../models/database");
import Contact from "../models/contactModel.js";
 const submitQuery=async(req,res)=>{
    try {
        const { name, email, message } = req.body;
        const newMessage = new Contact({ name, email, message });
        await newMessage.save();
        return res.json({
            error:false,
            newMessage,
            message: "Message received"
        });
      } catch (error) {
        // res.status(500).json({ success: false, error: err.message });
        return res.status(400).json({
            error:true,
            message:"Internal server error"
        })
      }
}
export default submitQuery;