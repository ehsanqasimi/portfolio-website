import Timeline from "../components/Timeline";
import { useState, useEffect } from "react";
import axios from "axios";

function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = import.meta.env.API_BASE;
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(`${API_BASE}/experience`);
        // Ensure it's always an array
        const data = Array.isArray(response.data) ? response.data : [];
        setExperience(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
        setExperience([]); // fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, [API_BASE]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (experience.length === 0) {
    return (
      <div className="p-8 text-gray-500">No experience data available.</div>
    );
  }

  return (
    <div className="px-4 lg:px-50 py-25">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Experience</h1>
      <Timeline items={experience} />
    </div>
  );
}

export default Experience;
