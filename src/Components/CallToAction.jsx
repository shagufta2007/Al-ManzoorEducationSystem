import React from "react";
import "../Css/CallToAction.css"
import ApplyForm from "../Pages/ApplyForm";


import { useNavigate } from "react-router-dom";


const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <h2>Admissions Open – Enroll Your Child Today!</h2>
        <p>
          Give your child a strong academic foundation in a safe, caring, and
          innovative learning environment.
        </p>
        <button
          className="cta-btn"
          onClick={() => navigate("/apply")}
        ><ApplyForm/>
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
