// src/Pages/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info max-w-2xl mx-auto p-6 bg-[#f5f5f5] rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-[#1E3A8A] text-center">Our Contact Information</h2>

      <div className="space-y-4 text-gray-700 text-lg">
        {/* Address */}
        <p className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">📍</span>
          Al-Manzoor Education System, 123 Main Street, Your City
        </p>

        {/* Phone */}
        <p className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">📞</span>
          +92-301-7360657
        </p>

        {/* Email */}
        <p className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">✉️</span>
          info@almanzooreducationsystem.com
        </p>

        {/* Website */}
        <p className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">🌐</span>
          <a href="https://www.almanzooreducationsystem.com" target="_blank" className="underline hover:text-[#163270]">
            www.almanzooreducationsystem.com
          </a>
        </p>

        {/* WhatsApp Button */}
        <p>
          <a
            href="https://wa.me/923017360657"
            target="_blank"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-2"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
