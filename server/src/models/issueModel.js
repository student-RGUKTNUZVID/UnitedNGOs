
import mongoose from "mongoose";
const issueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'General',
        'Education',
        'Health',
        'Women’s Rights',
        'Environmental Issues',
        'Poverty',
        'Corruption',
        'Infrastructure',
        'Public Safety',
      ],
    },
    location: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    mediaUrls: [
        {
          public_id: String,
          url: String,
          type: {
            type: String, // e.g., "image", "video", "pdf"
            enum: ["image", "video", "pdf"],
          },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
  },
  
);

const Issue = mongoose.model('Issue', issueSchema);
export default Issue;
