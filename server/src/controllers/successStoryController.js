import SuccessStory from '../models/successStoryModel.js';

// Create a new success story
const createSuccessStory = async (req, res) => {
  try {
    const { title, description, impact, duration, location, ngo, image } = req.body;
    
    const successStory = new SuccessStory({
      title,
      description,
      impact,
      duration,
      location,
      ngo,
      image
    });

    const savedStory = await successStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all success stories
const getAllSuccessStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find()
      .sort({ createdAt: -1 });
      console.log(stories);
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get latest success stories (for homepage)
const getLatestSuccessStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find()
      .sort({ createdAt: -1 })
      .limit(3);
      console.log(stories);
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single success story
const getSuccessStory = async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    
    if (!story) {
      return res.status(404).json({ message: 'Success story not found' });
    }
    
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a success story
const updateSuccessStory = async (req, res) => {
  try {
    const { title, description, impact, duration, location, ngo, image } = req.body;
    
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Success story not found' });
    }

    // Update fields
    story.title = title || story.title;
    story.description = description || story.description;
    story.impact = impact || story.impact;
    story.duration = duration || story.duration;
    story.location = location || story.location;
    story.ngo = ngo || story.ngo;
    story.image = image || story.image;

    const updatedStory = await story.save();
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a success story
const deleteSuccessStory = async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Success story not found' });
    }

    await story.remove();
    res.status(200).json({ message: 'Success story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createSuccessStory,
  getAllSuccessStories,
  getLatestSuccessStories,
  getSuccessStory,
  updateSuccessStory,
  deleteSuccessStory
}; 