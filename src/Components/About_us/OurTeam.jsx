import React from "react";
import "../../Css/OurTeam.css";


const OurTeam = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Our Team</h2>

      <div className="team-card">
        <img src="public/Gallerytrip/teacher.jpg" alt="Our Teachers" className="team-image" />

        <div className="team-overlay">
          <p>
            Our qualified and experienced teachers are dedicated to shaping
            confident, capable, and lifelong learners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
