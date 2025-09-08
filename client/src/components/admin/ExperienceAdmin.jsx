import { useEffect, useState } from "react";

export default function ExperienceAdmin() {
  const [experience, setExperience] = useState([]);
  const [form, setForm] = useState({
    company: "",
    role: "",
    timeframe: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  useEffect(() => {
    loadExperience();
  }, [API_BASE]);

  const loadExperience = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/experience`);
      const data = Array.isArray(await res.json()) ? await res.json() : [];
      setExperience(data);
    } catch (err) {
      console.error("Error fetching experience:", err);
      setExperience([]); // fallback to empty array
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing record
        await fetch(`${API_BASE}/api/experience/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setEditingId(null);
      } else {
        // Add new record
        await fetch(`${API_BASE}/api/experience`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setForm({ company: "", role: "", timeframe: "", description: "" });
      loadExperience();
    } catch (err) {
      console.error("Error saving experience:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_BASE}/api/experience/${id}`, {
        method: "DELETE",
      });
      loadExperience();
    } catch (err) {
      console.error("Error deleting experience:", err);
    }
  };

  const handleEdit = (exp) => {
    setForm({
      company: exp.company,
      role: exp.role,
      timeframe: exp.timeframe,
      description: exp.description,
    });
    setEditingId(exp._id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Experience</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
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
          {editingId ? "Update Experience" : "Add Experience"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({
                company: "",
                role: "",
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
        {experience.map((exp) => (
          <div key={exp._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p>{exp.role}</p>
            <p className="text-gray-600">{exp.timeframe}</p>
            <p className="text-gray-700">{exp.description}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(exp)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(exp._id)}
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
