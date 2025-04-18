import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  theme: {
    type: [String], // allows multiple themes like ['Education', 'Health']
    required: true
  },
  contactEmail: {
    type: String,
    match: /.+\@.+\..+/,
    lowercase: true
  },
  phoneNumber: {
    type: String
  },
  website: {
    type: String
  },
  address: {
    type: String
  },
  logoURL: {
    type: String
  },
  projects: {
    completed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CompletedProject' }],
    ongoing: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OngoingProject' }],
    upcoming: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UpcomingProject' }]
  },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }],
  ngoHead:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NGOHead',
    unique: true,
  },
  collaborators:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Collaborator' }],
});

const NGO = mongoose.model('NGO', ngoSchema);
export default NGO;
