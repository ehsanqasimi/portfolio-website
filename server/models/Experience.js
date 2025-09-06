import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    timeframe: { type: String, required: true },
    description: { type: String },
});

export default mongoose.model("Experience", ExperienceSchema);
