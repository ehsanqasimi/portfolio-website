import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { motion } from "framer-motion";


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const VITE_API_BASE = import.meta.env.VITE_API_BASE;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE}/projects`);
        // Ensure response is always an array
        const data = Array.isArray(response.data) ? response.data : [];
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [VITE_API_BASE]);

  return (
    <div className="px-6 md:px-12 py-12 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-8">
        All Projects
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card {...proj} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No projects available.</p>
      )}

      {/* Optional Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-green-900 text-lg mb-4">
          Interested in collaborating or learning more?
        </p>
        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition font-semibold"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Projects;
