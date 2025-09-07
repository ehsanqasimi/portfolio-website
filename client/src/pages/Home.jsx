import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data.slice(0, 2));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const skills = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Vite",
    "REST APIs",
    "Framer Motion",
  ];

  return (
    <div className="space-y-32 pb-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-green-100 via-white to-green-50 overflow-hidden">
        {/* Floating Blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-green-300 rounded-full top-0 left-10 opacity-30 blur-3xl animate-blob"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-green-400 rounded-full bottom-0 right-20 opacity-20 blur-3xl animate-blob animation-delay-2000"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-green-800">Mohamad Ehsan</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-green-900 max-w-2xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Full-stack developer crafting clean, scalable, and visually appealing
          applications with modern web technologies.
        </motion.p>

        <motion.div
          className="mt-10 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-xl transition group"
          >
            View My Work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
          Featured Projects
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="transition"
              >
                <Card {...proj} />
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-semibold underline transition group"
          >
            See all projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* About & Skills */}
      <section className="px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            About Me
          </h2>
          <p className="text-green-900 leading-relaxed">
            I’m a passionate full-stack developer specializing in modern web
            technologies. With a strong focus on performance, scalability, and
            user experience, I bring ideas to life through clean and efficient
            code.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-green-100 text-green-800 px-5 py-2 rounded-full shadow-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          Testimonials
        </h2>
        <motion.blockquote
          className="max-w-2xl mx-auto italic text-green-900 text-lg relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Quote className="absolute -top-8 left-1/2 -translate-x-1/2 text-green-300 w-10 h-10" />
          “Working with Ehsan was an absolute pleasure — professional,
          innovative, and always delivering on time.”
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-full shadow-lg font-semibold text-xl transition"
          >
            Let’s Work Together
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
