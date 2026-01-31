import React from "react";
import "../../Css/Announcements.css";
import { MdAnnouncement } from "react-icons/md";

const Announcements = () => {
  const updates = [
    { title: "Parent–Teacher Meeting", date: "Every Month" },
    { title: "Graduation Ceremony", date: "10 Feb " },
    { title: "Annual Sports Day", date: "1 Jan" },
    { title: "Art Exhibition", date: "28 Dec" },
  ];

  return (
    <section className="quick-updates-section">
      <div className="updates-container">
        <h2 className="section-title">School Announcements</h2>

        <div className="updates-grid">
          {updates.map((item, index) => (
            <div key={index} className="update-card">
              <span className="update-date">{item.date}</span>
              <h4 className="update-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
