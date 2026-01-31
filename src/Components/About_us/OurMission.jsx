import React from "react";
import "../../Css/OurMission.css";

const OurMission = () => {
  return (
    <section className="mission-section">
      <div className="mission-card fade-up">
        <h2>Our Mission</h2>

        <p className="mission-text">
          At{" "}
          <span className="school-name typing">
            Al-Manzoor Education System
          </span>
          , our mission is to empower students with knowledge, skills, and
          values needed to succeed academically and socially in a changing
          world.
        </p>

        <span className="mission-tagline">
          Shaping Confident Learners for a Better Tomorrow
        </span>
      </div>
    </section>
  );
};
export default OurMission;