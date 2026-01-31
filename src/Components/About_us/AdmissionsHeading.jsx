// AdmissionsHeading.jsx
import React from "react";
import '../../Css/AdmissionsHeading.css'; // optional CSS for styling

const AdmissionsHeading = () => {
  return (
    <section className="admissions-heading">
      <div className="container text-center">
        <h1 className="main-heading">
          Admissions at <span className="highlight">Al-Manzoor Education System</span>
        </h1>
        <p className="subheading">
          Join our nurturing and innovative learning environment. Enroll your child today!
        </p>
      </div>
    </section>
  );
};

export default AdmissionsHeading;
