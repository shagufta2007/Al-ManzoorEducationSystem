import React from "react";
import "../Css/Facilities.css";
import { FaBook, FaBasketballBall, FaShieldAlt } from "react-icons/fa";

const Facilities = () => {
  return (
    <section className="facilities-section">
      <h2 className="facilities-title">Our Facilities</h2>
      <p className="facilities-subtitle">
        Creating a safe, modern, and engaging learning environment
      </p>

      <div className="facilities-container">
        <div className="facility-card">
          <FaBook className="facility-icon" />
          <h3>Smart Classrooms</h3>
          <p>
            Modern classrooms equipped with digital tools and interactive
            learning resources to enhance student understanding.
          </p>
        </div>

        <div className="facility-card">
          <FaBasketballBall className="facility-icon" />
          <h3>Sports & Activities</h3>
          <p>
            Indoor and outdoor sports activities that promote physical fitness,
            teamwork, and confidence.
          </p>
        </div>

        <div className="facility-card">
          <FaShieldAlt className="facility-icon" />
          <h3>Secure Campus</h3>
          <p>
            A fully monitored and secure campus ensuring a safe and peaceful
            environment for students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;