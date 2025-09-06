import { useEffect, useState } from "react";

export default function EducationAdmin() {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({
    school: "",
    degree: "",
    timeframe: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Load education records
  useEffect(() => {
    loadEducation();
  }, []);

  const loadEducation = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/education");
      const data = await res.json();
      setEducation(data);
    } catch (err) {
      console.error("Error fetching education:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing record
        await fetch(`http://localhost:5000/api/education/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setEditingId(null);
      } else {
        // Add new record
        await fetch("http://localhost:5000/api/education", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setForm({ school: "", degree: "", timeframe: "", description: "" });
      loadEducation();
    } catch (err) {
      console.error("Error saving education:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/education/${id}`, {
        method: "DELETE",
      });
      loadEducation();
    } catch (err) {
      console.error("Error deleting education:", err);
    }
  };

  const handleEdit = (edu) => {
    setForm({
      school: edu.school,
      degree: edu.degree,
      timeframe: edu.timeframe,
      description: edu.description,
    });
    setEditingId(edu._id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Education</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="School"
          value={form.school}
          onChange={(e) => setForm({ ...form, school: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Degree"
          value={form.degree}
          onChange={(e) => setForm({ ...form, degree: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Timeframe"
          value={form.timeframe}
          onChange={(e) => setForm({ ...form, timeframe: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {editingId ? "Update Education" : "Add Education"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({
                school: "",
                degree: "",
                timeframe: "",
                description: "",
              });
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      {/* List */}
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{edu.school}</h3>
            <p>{edu.degree}</p>
            <p className="text-gray-600">{edu.timeframe}</p>
            <p className="text-gray-700">{edu.description}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(edu)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(edu._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
