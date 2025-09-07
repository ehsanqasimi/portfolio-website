import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-green-100 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Name */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="" className="h-15 w-15 inline mr-2" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link to="/education" className="hover:text-white transition">
            Education
          </Link>
          <Link to="/experience" className="hover:text-white transition">
            Experience
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-green-200 text-sm mt-6">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
