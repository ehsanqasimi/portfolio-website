import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="px-6 md:px-12 py-12 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-8">
        All Projects
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card {...proj} />
            </motion.div>
          ))}
        </div>
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
