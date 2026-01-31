import React, { useState } from "react";
import "../Css/Admissions.css";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Child's name is required.";
    if (!formData.age.trim()) newErrors.age = "Child's age is required.";
    if (!formData.grade.trim()) newErrors.grade = "Grade is required.";
    if (!formData.parentName.trim())
      newErrors.parentName = "Parent's name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number is invalid.";
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    console.log("Form Data:", formData);

    // Reset form (optional)
    setFormData({
      name: "",
      age: "",
      grade: "",
      parentName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="admissions-container">
      <h2>Admissions at Al-Manzoor Education System</h2>
      <p>Join our nurturing and innovative learning environment. Enroll your child today!</p>

      {submitted && <p className="success-msg">Form submitted successfully!</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Child's Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Child's Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label>Grade Applying For</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          />
          {errors.grade && <span className="error">{errors.grade}</span>}
        </div>

        <div className="form-group">
          <label>Parent's Name</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
          />
          {errors.parentName && <span className="error">{errors.parentName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Additional Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Admissions;
