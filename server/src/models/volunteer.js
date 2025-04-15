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
    ref: 'NGO'
  }],

  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UpcomingProject'
  }],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Replace 'User' with your actual user model name
    required: false // set true if every volunteer must be linked to a user
  }

}, {
  timestamps: true
});

export default mongoose.model('Volunteer', volunteerSchema);
