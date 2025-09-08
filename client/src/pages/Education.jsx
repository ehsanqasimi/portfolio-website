import { useState, useEffect } from "react";
import axios from "axios";
import Timeline from "../components/Timeline";

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get("/api/education");
        // Ensure the response is always an array
        const data = Array.isArray(response.data) ? response.data : [];
        setEducation(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
        setEducation([]); // fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchEducation();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (education.length === 0) {
    return (
      <div className="p-8 text-gray-500">No education data available.</div>
    );
  }

  return (
    <div className="px-4 lg:px-70 py-25">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Education</h1>
      <Timeline items={education} />
    </div>
  );
}

export default Education;
