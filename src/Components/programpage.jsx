import React from "react";
import "../Css/Programs.css"; // CSS file

const programsData = [
  {
    name: "Early Learning Program",
    description: "Nurturing young minds with play-based learning.",
    age: "Ages 3–5",
  },
  {
    name: "Primary Education",
    description: "Focus on core academics and creative development.",
    age: "Grades 1–5",
  },
  {
    name: "STEM Program",
    description: "Hands-on science, technology, engineering, and math activities.",
    age: "Grades 3–8",
  },
  {
    name: "Arts & Music Program",
    description: "Encouraging creativity through music, drawing, and performing arts.",
  },
  {
    name: "Sports & Physical Education",
    description: "Building fitness, teamwork, and discipline.",
  },
  {
    name: "Language Enrichment",
    description: "Enhancing communication skills and language proficiency.",
  },
];

const Programs = () => {
  return (
    <div className="programs-container">
    
      <p className="programs-subheading">
       <b> Explore the variety of educational programs designed to nurture every child’s potential.</b>
      </p>
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <div key={index} className="program-card">
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            {program.age && <span className="program-age">{program.age}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
