import express from 'express';
import {
  createSuccessStory,
  getAllSuccessStories,
  getLatestSuccessStories,
  getSuccessStory,
  updateSuccessStory,
  deleteSuccessStory
} from '../controllers/successStoryController.js';

const router = express.Router();

// Create a new success story
router.post('/', createSuccessStory);

// Get all success stories
router.get('/', getAllSuccessStories);

// Get latest success stories (for homepage)
router.get('/latest', getLatestSuccessStories);

// Get a single success story
router.get('/:id', getSuccessStory);

// Update a success story
router.put('/:id', updateSuccessStory);

// Delete a success story
router.delete('/:id', deleteSuccessStory);

export default router; 