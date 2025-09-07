import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setError(false);

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);

      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setError(false);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
        setError(true);
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("❌ Server error. Please try again later.");
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-green-700">
            Get in Touch
          </h1>
          <p className="mt-3 text-green-900 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" />
              <span className="text-green-900 text-lg">
                ehsan@luckytech.dev
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" />
              <span className="text-green-900 text-lg">
                Your City, Your Country
              </span>
            </div>
            <div className="flex gap-6 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white shadow-xl p-8 rounded-2xl border border-green-400"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-green-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-green-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-green-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>

        {/* Status message */}
        {status && (
          <p
            className={`mt-8 text-center font-medium ${
              error ? "text-red-600" : "text-green-700"
            }`}
          >
            {status}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
