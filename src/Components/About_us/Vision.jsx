import React, { useEffect, useState } from "react";
import "../../Css/Vision.css";

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-card">
        <h2 className="vision-title">
          Our <span>Vision</span>
        </h2>

        <p className="vision-text">
          To become a leading educational institution that inspires curiosity,
          creativity, and lifelong learning—preparing students to become
          confident, responsible, and successful global citizens.
        </p>

        <p className="vision-tagline">
          Inspiring Minds. Shaping the Future.
        </p>
      </div>
    </section>
  );
};

export default Vision;
