import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }, // Cloudinary image URL
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }]
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;
