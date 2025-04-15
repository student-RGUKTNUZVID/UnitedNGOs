
import express from 'express';
import Volunteer from '../models/volunteer.js';// adjust the path as needed
import UpcomingProject from '../models/upcomingProjectModel.js';
import NGO from '../models/ngoModel.js';
const router = express.Router();

router.post('/join-volunteer', async (req, res) => {
    try {
      const { name, email, skills, location, ngoId, projectId } = req.body;
  
      // Check if volunteer already exists by email
      const existingVolunteer = await Volunteer.findOne({ email });
      if (existingVolunteer) {
        return res.status(400).json({ message: "Volunteer already registered" });
      }
  
      // Create new volunteer
      const newVolunteer = await Volunteer.create({
        name,
        email,
        skills,
        location,
        ngos: ngoId ? [ngoId] : [],
        projects: projectId ? [projectId] : [],
      });
  
      // After volunteer creation, update the project with the new volunteer ID
      if (projectId) {
        const updatedProject = await UpcomingProject.findByIdAndUpdate(
          {_id:projectId},
          { $push: { volunteers: newVolunteer._id?[newVolunteer._id]:[] } }, // add the volunteer ID to the project
          { new: true }
        );
      if(ngoId){
        const updatedngo = await NGO.findByIdAndUpdate(
            {_id:ngoId},
            {
              $push: {
                volunteers: newVolunteer._id ? [newVolunteer._id] : []
              }
            }
            , // add the volunteer ID to the project
            { new: true }
          );
      }
        if (!updatedProject ) {
          return res.status(404).json({ message: "Project not found" });
        }
        if (!updatedngo ) {
            return res.status(404).json({ message: "ngo not found" });
          }
      }
  
      return res.status(201).json({
        success: true,
        message: "Volunteer registered successfully",
        volunteer: newVolunteer,
      });
  
    } catch (error) {
      console.error("Error registering volunteer:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });
  

export default router;
