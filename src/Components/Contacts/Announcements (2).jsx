import React from "react";
import "../../Css/Announcements.css";

const Announcements = () => {
  return (
    <section className="announcements">
      <h3 className="announcements-title">Announcements</h3>

      <div className="announcement-item">
        <span className="announcement-date">Every Month</span>
        <p>Parent–Teacher Meeting</p>
      </div>

      <div className="announcement-item">
        <span className="announcement-date">Feb 10, 2026</span>
        <p>Graduation Ceremony</p>
      </div>

      <div className="announcement-item">
        <span className="announcement-date">Dec 28, 2025</span>
        <p>Art Exhibition</p>
      </div>
    </section>
  );
};

export default Announcements;
