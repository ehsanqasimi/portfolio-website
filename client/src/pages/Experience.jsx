import Timeline from "../components/Timeline";
import { useState, useEffect } from "react";
import axios from "axios";



function Experience() {

  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get("/api/experience");
        setExperience(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Experience</h1>
      <Timeline items={experience} />
    </div>
  );
}

export default Experience;
