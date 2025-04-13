import mongoose from "mongoose";

const completedProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true }
}, { timestamps: true });

const CompletedProject= mongoose.model('CompletedProject', completedProjectSchema);
export default CompletedProject;
