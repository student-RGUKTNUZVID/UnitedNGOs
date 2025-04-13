import mongoose from "mongoose";

const ongoingProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true }
}, { timestamps: true });

const OngoingProject = mongoose.model('OngoingProject', ongoingProjectSchema);
export default OngoingProject;
