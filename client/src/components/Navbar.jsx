import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 
        backdrop-blur-lg backdrop-brightness-110
        bg-green-800/50 border border-green-400/20
        text-white shadow-xl"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-2xl font-bold 
            text-shadow-md hover:text-green-100 
            transition-all duration-300 ease-in-out 
            transform hover:scale-105"
        >
          <i>Mohamad Ehsan Qasemi</i>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-3 py-2 rounded-md 
                text-shadow-sm hover:text-green-100 
                transition-all duration-300 ease-in-out
                ${
                  location.pathname === link.path
                    ? "font-semibold text-green-100 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-8 before:h-0.5 before:bg-green-200 before:animate-expand"
                    : "hover:underline"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-green-600 hover:bg-green-500 text-white 
              px-5 py-2 rounded-full font-semibold 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
              shadow-md"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-green-700/40 
              transition-all duration-300 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                size={24}
                className="text-white transition-transform duration-300 rotate-90"
              />
            ) : (
              <Menu
                size={24}
                className="text-white transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden 
          bg-green-800/90 backdrop-blur-md backdrop-brightness-110
          text-white border-t border-green-400/20
          overflow-hidden transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "max-h-96 py-4 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
      >
        <div className="px-6 space-y-3">
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-shadow-sm hover:text-green-100 
                transition-all duration-300 delay-[${index * 50}ms] 
                transform hover:translate-x-2
                ${
                  location.pathname === link.path
                    ? "font-semibold underline"
                    : ""
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 bg-green-500 hover:bg-green-400 
              text-white px-5 py-3 rounded-full text-center 
              font-semibold transition-all duration-300 
              transform hover:scale-105 hover:shadow-md shadow"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
