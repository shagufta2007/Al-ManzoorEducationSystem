import React from "react";
import "../Css/Programs.css";

const programs = [
  {
    title: "Play Group",
    desc: "Fun-based early learning that builds confidence, creativity, and social skills.",
  },
  {
    title: "Nursery",
    desc: "A strong foundation in reading, writing, numbers, and creative thinking.",
  },
  {
    title: "Primary Section",
    desc: "Building academic excellence, confidence, and character development.",
  },
  {
    title: "Middle Section",
    desc: "Developing critical thinking, discipline, and subject clarity.",
  },
];

const Programs = () => {
  return (
    <section className="programs">
      <h2 className="programs-heading">Our Programs</h2>

      <div className="programs-grid">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;