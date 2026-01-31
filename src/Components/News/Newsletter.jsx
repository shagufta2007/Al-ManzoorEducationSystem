import React, { useState } from "react";
import "../../Css/Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Please enter a valid email.");
    } else {
      // Yahan aap API call ya mailchimp integration kar sakte hain
      setMessage(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <div className="newsletter-section">
      <h2 className="newsletter-title">
        Subscribe to our newsletter
      </h2>
      <p className="newsletter-subtitle">
        Receive the latest updates directly in your inbox!
      </p>
      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};

export default Newsletter;
