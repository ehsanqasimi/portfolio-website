import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data); // Limit to 4 projects
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Projects Page</h1>
      <div className="grid md:grid-cols-2 gap-6">

        {loading ? "loading..." : Array.isArray(projects) &&
          projects.map((proj, index) => <Card key={index} {...proj} />)}
      </div>
    </div>
  );
}
export default Projects;
