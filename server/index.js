import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";



import projectRoutes from "./routes/projects.js";
import educationRoutes from "./routes/education.js";
import experienceRoutes from "./routes/experience.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173", // your frontend origin
}));



app.use("/api/projects", projectRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
