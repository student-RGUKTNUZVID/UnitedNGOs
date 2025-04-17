import mongoose from "mongoose";

const upcomingProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }],
  collaborators:[{ type: mongoose.Schema.Types.ObjectId, ref: 'NGOHead' }],
}, { timestamps: true });

const UpcomingProject = mongoose.model('UpcomingProject', upcomingProjectSchema);
export default UpcomingProject;
