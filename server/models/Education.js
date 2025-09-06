import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    school: { type: String, required: true },
    degree: { type: String, required: true },
    timeframe: { type: String, required: true },
    description: { type: String },
});

export default mongoose.model("Education", EducationSchema);
