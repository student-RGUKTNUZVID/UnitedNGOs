
import express from 'express';
import Volunteer from '../models/volunteer.js';// adjust the path as needed
import UpcomingProject from '../models/upcomingProjectModel.js';
import NGO from '../models/ngoModel.js';
import Collaborator from '../models/Collaborator.js';
const router = express.Router();

router.post('/join-volunteer', async (req, res) => {
  try {
    const { name, email, skills, location, ngoId, projectId ,userId} = req.body;
    // Check if volunteer already exists by email
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ success:false,message: "Volunteer already registered",
    data:existingVolunteer });
    }
      // Create new volunteer if not already exists
    const newVolunteer = await Volunteer.create({
      name,
      email,
      skills,
      location,
      ngos: ngoId ? [ngoId] : [],
      projects: projectId ? [projectId] : [],
      user:userId
    });

    // Update project with volunteer if projectId is provided
    if (projectId) {
      const updatedProject = await UpcomingProject.findByIdAndUpdate(
        projectId,
        { $push: { volunteers: [newVolunteer._id] } },
        { new: true }
      );

      if (!updatedProject) {
        return res.status(404).json({ 
          message: "Project not found" });
      }

      // Update NGO with volunteer if ngoId is provided
      
    }
    if (ngoId) {
      const updatedNgo = await NGO.findByIdAndUpdate(
        ngoId,
        { $addToSet: { volunteers: newVolunteer._id } }, // use $addToSet to avoid duplicates
        { new: true }
      );
      console.log("Updated NGO with volunteer:", updatedNgo);
      if (!updatedNgo) {
        return res.status(404).json({ message: "NGO not found" });
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
router.post('/join-collaborator', async (req, res) => {
  try {
    const { name, email, description, ngoId, projectId, userId } = req.body;

    // Create new collaborator
    const newCollaborator = await Collaborator.create({
      name,
      email,
      description,
      ngos: ngoId ? [ngoId] : [],
      projects: projectId ? [projectId] : [],
      user: userId,
    });

    // Add collaborator ID to the project if projectId is provided
    if (projectId) {
      const updatedProject = await UpcomingProject.findByIdAndUpdate(
        projectId,
        { $addToSet: { collaborators: [newCollaborator._id] } }, // $addToSet avoids duplicates
        { new: true }
      );

      if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
      }
    }

    // Optionally add collaborator to the NGO
    if (ngoId) {
      const updatedNgo = await NGO.findByIdAndUpdate(
        ngoId,
        { $addToSet: { collaborators: [newCollaborator._id]}},
        { new: true }
      );

      if (!updatedNgo) {
        return res.status(404).json({ message: "NGO not found" });
      }
    }

    return res.status(201).json({
      success: true,
      message: "Collaborator registered and linked successfully",
      collaborator: newCollaborator,
    });

  } catch (error) {
    console.error("Error registering collaborator:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});


  

export default router;
