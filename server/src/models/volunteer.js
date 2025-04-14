import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },

  skills: {
    type: [String],
    default: []
  },

  location: {
    type: String,
    required: true
  },

  ngos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NGO' // assuming your NGO model is named 'NGO'
  }],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UpcomingProject' // assuming your NGO model is named 'NGO'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Volunteer', volunteerSchema);
