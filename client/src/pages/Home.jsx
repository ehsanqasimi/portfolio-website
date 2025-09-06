import React, { useState, useEffect} from "react";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data.slice(0, 2));
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
    <>
      {loading ? "loading..." : null}

      <div className="p-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-green-700">
            Hi, I’m Your Name
          </h1>
          <p className="mt-4 text-green-900">
            I build amazing web applications.
          </p>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {loading
              ? "loading..."
              : Array.isArray(projects) &&
                projects.map((proj, index) => <Card key={index} {...proj} />)}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
