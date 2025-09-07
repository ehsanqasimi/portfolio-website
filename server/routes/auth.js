import express from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Simple login route
router.post("/login", (req, res) => {
    const { password } = req.body;

    if (password === process.env.ADMIN_PASSWORD) {
        return res.json({ success: true });
    } else {
        return res.status(401).json({ error: "Invalid password" });
    }
});

export default router;
