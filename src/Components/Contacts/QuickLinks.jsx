

import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="quick-links max-w-4xl mx-auto mt-8 p-4 bg-[#f5f5f5] rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Quick Links</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/admissions"
          className="flex items-center px-4 py-2 bg-white rounded shadow hover:bg-[#1E3A8A] hover:text-white transition"
        >
          🏫 Admissions
        </Link>
        <Link
          to="/programs"
          className="flex items-center px-4 py-2 bg-white rounded shadow hover:bg-[#1E3A8A] hover:text-white transition"
        >
          📚 Programs
        </Link>
        <Link
          to="/news"
          className="flex items-center px-4 py-2 bg-white rounded shadow hover:bg-[#1E3A8A] hover:text-white transition"
        >
          📰 News & Events
        </Link>
      </div>
    </div>
  );
};