// require("../models/database");
import Contact from "../models/contactModel.js";
import Issue from "../models/issueModel.js";

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


const raiseIssue=async(req,res)=>{
  try {
    const { name, email, category, message, location } = req.body;
    console.log(req.body);
    const mediaUrls = req.files.map(file => ({
      public_id: file.filename,
      url: file.path,
      type: file.mimetype.includes('image')
        ? 'image'
        : file.mimetype.includes('video')
        ? 'video'
        : 'pdf',
    }));

    const issue = new Issue({
      name,
      email,
      category,
      message,
      location,
      mediaUrls,
    });

    await issue.save();
    res.status(201).json({ message: 'Issue submitted successfully!' });
    console.log("Issue submitted successfully!")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
}
export {submitQuery,raiseIssue}