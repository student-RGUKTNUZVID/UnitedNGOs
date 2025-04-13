import express from 'express';
import Hackathon from '../models/Hackathon.js';
import auth from '../routes/auth.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/hackathons/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Get all hackathons
router.get('/', auth, async (req, res) => {
  try {
    const hackathons = await Hackathon.find()
      .populate('organizer', 'name')
      .sort({ startDate: 1 });
    res.json(hackathons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get upcoming and ongoing hackathons
router.get('/active', auth, async (req, res) => {
  try {
    const hackathons = await Hackathon.find({
      status: { $in: ['upcoming', 'ongoing'] }
    })
      .populate('organizer', 'name')
      .sort({ startDate: 1 });
    res.json(hackathons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register a new hackathon
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, startDate, endDate, location, maxParticipants, prize, contactEmail, requirements } = req.body;
    
    const hackathon = new Hackathon({
      title,
      description,
      startDate,
      endDate,
      location,
      maxParticipants,
      prize,
      contactEmail,
      requirements,
      image: req.file ? req.file.filename : 'default-hackathon.jpg',
      organizer: req.user.id
    });

    const newHackathon = await hackathon.save();
    res.status(201).json(newHackathon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Register for a hackathon
router.post('/:id/register', auth, async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    
    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found' });
    }

    if (hackathon.participants.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already registered for this hackathon' });
    }

    if (hackathon.participants.length >= hackathon.maxParticipants) {
      return res.status(400).json({ message: 'Hackathon is full' });
    }

    hackathon.participants.push(req.user.id);
    await hackathon.save();
    res.json({ message: 'Successfully registered for the hackathon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 