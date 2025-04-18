// models/Stats.js
import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  views: {
    type: Number,
    default: 0,
  },
});

const Stats = mongoose.model("Stats", statsSchema);
export default Stats;
