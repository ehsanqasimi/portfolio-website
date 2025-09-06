import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-200">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/education" className="hover:text-gray-200">
            Education
          </Link>
        </li>
        <li>
          <Link to="/experience" className="hover:text-gray-200">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
