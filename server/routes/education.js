import express from "express";
import Education from "../models/Education.js";

const router = express.Router();

// GET all
router.get("/", async (req, res) => {
    const education = await Education.find();
    res.json(education);
});

// POST
router.post("/", async (req, res) => {
    const newEducation = new Education(req.body);
    const saved = await newEducation.save();
    res.json(saved);
});

// PUT
router.put("/:id", async (req, res) => {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});


// Update an education record
router.put("/:id", async (req, res) => {
    try {
        const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


export default router;
