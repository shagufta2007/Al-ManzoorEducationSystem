import React from "react";
import "../Css/PrincipalMessage.css";


const PrincipalMessage = () => {
  return (
    <section className="principal-section">
      <div className="principal-container">
        <div className="principal-image">
          <img src="public/chand.jpg" alt="Principal" />
        </div>
        <div className="principal-text">
          <h2>Message from Our Principal</h2>
          <p className="quote">
            "Our mission is to build confident, responsible, and knowledgeable students ready for 
            the future."
          </p>
          <p>
            At Al-Manzoor School, we are committed to nurturing each child’s potential. Our focus
             is on holistic development—academics, character building, and creative skills. 
             We believe in a partnership with parents to create a safe, inspiring, and supportive
              learning environment.
          </p>
          <p className="trust">
            ✔ This builds <strong>trust with parents</strong>, showing dedication and 
            professionalism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;