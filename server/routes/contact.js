import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT == 465, // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const mailOptions = {
            from: `"Portfolio Website" <${process.env.SMTP_USER}>`, // ✅ must match your mailbox
            to: process.env.EMAIL_TO, // your email where you want to receive messages
            subject: `New Contact Message from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            replyTo: email, // ✅ lets you reply directly to the sender
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
});

export default router;
