import React, { useState } from "react";
import "../../Css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you. Feel free to reach out with any
            questions about admissions, programs, or school activities.
          </p>

          <ul>
            <li><strong>Address:</strong> Al-Manzoor Education System</li>
            <li><strong>Phone:</strong> +92 300 1234567</li>
            <li><strong>Email:</strong> info@almanzoor.edu.pk</li>
            <li><strong>Office Hours:</strong> Mon – Fri (8:00 AM – 2:00 PM)</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;
