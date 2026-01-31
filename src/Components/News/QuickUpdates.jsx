import React from "react";
import "../../Css/QuickUpdates.css";

const QuickUpdates = () => {
  const updates = [
    { title: "Parent–Teacher Meeting", date: "Every Month" },
    { title: "Graduation Ceremony", date: "Feb 10, 2026" },
    { title: "Annual Sports Day", date: "Jan 1, 2026" },
    { title: "Art Exhibition", date: "Dec 28, 2025" },
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

export default QuickUpdates;
