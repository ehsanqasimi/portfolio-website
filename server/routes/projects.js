import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// POST new project
router.post("/", async (req, res) => {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.json(saved);
});

// PUT update project
router.put("/:id", async (req, res) => {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE project
router.delete("/:id", async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

// Update a project
router.put("/:id", async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
