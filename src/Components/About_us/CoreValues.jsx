import React from "react";
import { FaBook, FaHandshake, FaSeedling, FaLightbulb, FaBalanceScale, FaGlobe } from "react-icons/fa";
import "../../Css/CoreValues.css";

const CoreValues = () => {
  return (
    <section className="core-values">
      <h2 className="core-heading">Our Core Values</h2>
      <p className="core-subtitle">
        Guiding principles that shape our students’ future
      </p>

      <div className="core-grid">
        <div className="core-card">
          <FaBook className="core-icon" />
          <h3>Excellence in Education</h3>
        </div>

        <div className="core-card">
          <FaHandshake className="core-icon" />
          <h3>Respect & Discipline</h3>
        </div>

        <div className="core-card">
          <FaSeedling className="core-icon" />
          <h3>Character Building</h3>
        </div>

        <div className="core-card">
          <FaLightbulb className="core-icon" />
          <h3>Innovation & Creativity</h3>
        </div>

        <div className="core-card">
          <FaBalanceScale className="core-icon" />
          <h3>Integrity & Honesty</h3>
        </div>

        <div className="core-card">
          <FaGlobe className="core-icon" />
          <h3>Community & Responsibility</h3>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
