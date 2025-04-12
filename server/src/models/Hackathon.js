import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  maxParticipants: {
    type: Number,
    required: true
  },
  prize: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true
  },
  requirements: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'default-hackathon.jpg'
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Update status based on dates
hackathonSchema.pre('save', function(next) {
  const now = new Date();
  if (this.startDate <= now && this.endDate >= now) {
    this.status = 'ongoing';
  } else if (this.endDate < now) {
    this.status = 'completed';
  }
  next();
});

export default mongoose.model('Hackathon', hackathonSchema); 