import { useState } from "react";
import ProjectsAdmin from "../components/admin/ProjectsAdmin";
import EducationAdmin from "../components/admin/EducationAdmin";
import ExperienceAdmin from "../components/admin/ExperienceAdmin";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {["projects", "education", "experience"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 ${
              activeTab === tab
                ? "border-b-2 border-green-600 font-semibold text-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "projects" && <ProjectsAdmin />}
        {activeTab === "education" && <EducationAdmin />}
        {activeTab === "experience" && <ExperienceAdmin />}
      </div>
    </div>
  );
}
