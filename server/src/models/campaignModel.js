// models/Campaign.js
import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ngoName: { type: String, required: true },
  ngoId: { type: mongoose.Schema.Types.ObjectId, ref: "NGO" },  // <-- NEW
  description: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  targetImpact: { type: String, required: true },
  fundraisingTarget: { type: Number, required: true },
  bannerUrl: { type: String, required: true },
  collectedAmount: {
    type: Number,
    default: 0,
  },
  documentUrl: { type: String, required: true },
  agreedToTerms: { type: Boolean, required: true },
}, { timestamps: true });

const Campaign = mongoose.model("Campaign", campaignSchema);
export default Campaign;
