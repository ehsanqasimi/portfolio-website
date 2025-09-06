import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

// GET all
router.get("/", async (req, res) => {
    const experiences = await Experience.find();
    res.json(experiences);
});

// POST
router.post("/", async (req, res) => {
    const newExperience = new Experience(req.body);
    const saved = await newExperience.save();
    res.json(saved);
});

// PUT
router.put("/:id", async (req, res) => {
    const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});


// Update an experience record
router.put("/:id", async (req, res) => {
    try {
        const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


export default router;
