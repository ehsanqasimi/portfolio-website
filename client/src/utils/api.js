const VITE_API_BASE = import.meta.env.VITE_API_BASE

export const getProjects = async () => {
    const res = await fetch(`${VITE_API_BASE}/projects`);
    return res.json();
};

export const addProject = async (project) => {
    const res = await fetch(`${VITE_API_BASE}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
    });
    return res.json();
};

export const updateProject = async (id, project) => {
    const res = await fetch(`${VITE_API_BASE}/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
    });
    return res.json();
};

export const deleteProject = async (id) => {
    const res = await fetch(`${VITE_API_BASE}/projects/${id}`, {
        method: "DELETE",
    });
    return res.json();
};
