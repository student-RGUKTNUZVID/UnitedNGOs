import mongoose from 'mongoose';

const ngoHeadSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },

  contact: {
    type: String,
    required: true
  },

  operatingNGO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NGO',
    required: true
  },

  designation: {
    type: String,
    default: 'NGO Head'
  },

  experience: {
    type: String,
    default: 'Not specified'
  },
  verified: {
    type: Boolean,
    default: false
  },
  profilePicture: {
    type: String,
    default: ''
  }

}, { timestamps: true });

export default mongoose.model('NGOHead', ngoHeadSchema);
