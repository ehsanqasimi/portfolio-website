import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.luckytech.dev/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        setError(data.error || "Invalid password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}
