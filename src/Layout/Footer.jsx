import React from 'react'
import "../Css/Footer.css"

function Footer() {
  return (
    <>
    <footer className="footer">


  <div className="footer-container">

   




    <div className="footer-col">
      <h3>About Us</h3>
      <p>
       We are committed to providing quality education with modern learning techniques that focus 
       on academic excellence, character building, and practical skills, helping to shape a
        brighter and more confident future for our students.
      </p>
    </div>





    <div className="footer-col">
      <h3>Quick Links</h3>
       <ul>
        <li><a href="#">Home</a></li>
        <li><a href="/about">About School</a></li>
        <li><a href="/admissions">Admissions</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/gallery">Gallery</a></li>
      
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

 



    <div className="footer-col">
      <h3>Contact Info</h3>
          <ul>
        <li>🏫 Gogera Khass</li><br />
        <li>📞 +92 301 7360657</li><br />
        <li>📱 WhatsApp: +92 301 7360657</li><br />
        <li>✉️ info@schoolname.com</li>
      </ul>
    </div>

   



    <div className="footer-col">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
         <a href="#">TikTok</a>
          <a href="#">Whatsapp</a>
      </div>
    </div>

  </div>

 



  <div className="footer-bottom">
    © 2026 Al-Manzoor Education System Gogera Khass.
  </div>
</footer>

</>
  )
}

export default Footer;