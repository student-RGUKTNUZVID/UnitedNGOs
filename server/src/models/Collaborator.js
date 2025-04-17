import mongoose from "mongoose";

const collaboratorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
//   expertise: {
//     type: String,
//   },
//   location: {
//     type: String,
//   },
  ngos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NGO',
  }],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UpcomingProject',
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

const Collaborator = mongoose.model('Collaborator', collaboratorSchema);
export default Collaborator;
