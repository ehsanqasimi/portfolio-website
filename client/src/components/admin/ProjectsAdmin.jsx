import { useEffect, useState } from "react";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    live: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  // Load projects
  useEffect(() => {
    loadProjects();
  }, [API_BASE]);

  const loadProjects = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/projects`);
      const data = Array.isArray(await res.json()) ? await res.json() : [];
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setProjects([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update project
        await fetch(`${API_BASE}/api/projects/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setEditingId(null);
      } else {
        // Create new project
        await fetch(`${API_BASE}/api/projects`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setForm({ title: "", description: "", image: "", github: "", live: "" });
      loadProjects();
    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_BASE}/api/projects/${id}`, { method: "DELETE" });
      loadProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      image: project.image,
      github: project.github,
      live: project.live,
    });
    setEditingId(project._id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Projects</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="GitHub Link"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Live Demo Link"
          value={form.live}
          onChange={(e) => setForm({ ...form, live: e.target.value })}
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {editingId ? "Update Project" : "Add Project"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({
                title: "",
                description: "",
                image: "",
                github: "",
                live: "",
              });
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p>{p.description}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p._id)}
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
