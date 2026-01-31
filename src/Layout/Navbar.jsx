import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        
        
        <div className="logo">
          <img className="img" src="/almanzoorbgramove.png" alt="Al Manzoor Education System" />
        </div>

        
        
        <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        
       <ul className={`nav-menu ${open ? "open" : ""}`}>
  <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
  <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>

  <li><Link to="/programs" onClick={() => setOpen(false)}>Programs</Link></li>
  <li><Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
 
    <li><Link to="/admissions" onClick={() => setOpen(false)}>Admissions</Link></li>
  <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
  <li>
    <Link to="/apply" className="apply-btn" onClick={() => setOpen(false)}>
      Apply Now
    </Link>
  </li>
</ul>

      </div>
    </header>
  );
};

export default Navbar;