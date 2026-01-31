import React from "react";
import { FaShieldAlt, FaComments, FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaHeart } from "react-icons/fa";
import "../../Css/WhyParentsTrustUs.css";

const WhyParentsTrustUs = () => {
  const points = [
    {
      icon: <FaShieldAlt />,
      title: "Safe Campus",
      text: "A secure and child-friendly environment for learning."
    },
    {
      icon: <FaComments />,
      title: "Transparent Communication",
      text: "Regular updates and open communication with parents."
    },
    {
      icon: <FaBookOpen />,
      title: "Balanced Academics",
      text: "Equal focus on studies and co-curricular activities."
    },
    {
      icon: <FaUserGraduate />,
      title: "Individual Attention",
      text: "Personal focus on every child’s growth."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Qualified Teachers",
      text: "Experienced and caring teaching staff."
    },
    {
      icon: <FaHeart />,
      title: "Character Building",
      text: "Strong moral and ethical values."
    }
  ];

  return (
    <section className="trust-section">
      <h2 className="trust-heading">Why Parents Trust Us</h2>

      <div className="trust-grid">
        {points.map((item, index) => (
          <div className="trust-card" key={index}>
            <div className="trust-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyParentsTrustUs;
