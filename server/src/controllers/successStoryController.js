import SuccessStory from "../models/successStoryModel.js";

export const getLatestSuccessStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find()
      .sort({ createdAt: -1 })
      .limit(3);
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllSuccessStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 