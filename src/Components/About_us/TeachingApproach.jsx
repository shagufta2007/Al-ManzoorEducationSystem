import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaBalanceScale, FaClipboardCheck, FaLaptop, FaUsers } from "react-icons/fa";
import "../../Css/TeachingApproach.css";

const TeachingApproach = () => {
  return (
    <section className="approach-section">
      <h2 className="approach-heading">Our Teaching Approach</h2>

      <div className="approach-grid">
        <div className="approach-card">
          <FaUserGraduate className="approach-icon" />
          <h4>Student-Centered Learning</h4>
          <p>Students ko learning process ka center banaya jata hai.</p>
        </div>

        <div className="approach-card">
          <FaChalkboardTeacher className="approach-icon" />
          <h4>Activity-Based Education</h4>
          <p>Practical activities ke zariye behtar samajh paida ki jati hai.</p>
        </div>

        <div className="approach-card">
          <FaBalanceScale className="approach-icon" />
          <h4>Moral & Academic Growth</h4>
          <p>Character building ke sath academic excellence par focus.</p>
        </div>

        <div className="approach-card">
          <FaClipboardCheck className="approach-icon" />
          <h4>Continuous Assessment</h4>
          <p>Regular evaluations ke zariye student progress monitor hoti hai.</p>
        </div>

        <div className="approach-card">
          <FaLaptop className="approach-icon" />
          <h4>Modern Teaching Tools</h4>
          <p>Digital tools aur visual aids ka effective use.</p>
        </div>

        <div className="approach-card">
          <FaUsers className="approach-icon" />
          <h4>Individual Attention</h4>
          <p>Har student ki learning needs par special focus.</p>
        </div>
      </div>
    </section>
  );
};

export default TeachingApproach;
