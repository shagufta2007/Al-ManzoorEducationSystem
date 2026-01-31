import React from "react";
import "../css/WhyChooseUs.css";



const cards = [
  {
    img: "public/Gallerytrip/teacher.jpg",
    title: "Qualified & Caring Teachers",
    text: "Our experienced and caring teachers focus on every child’s growth."
  },
  {
    img: "public/class1.jpg",
    title: "Modern Learning Techniques",
    text: "Interactive and activity-based learning methods."
  },
  {
    img: "/img1.png",
    title: "Safe & Friendly Environment",
    text: "A secure and welcoming school atmosphere."
  },
  {
    img: "public/class5.jpg",
    title: "Strong Moral & Academic Values",
    text: "Building character along with academic excellence."
  }
];


const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h2 className="why-heading">Why Choose Our School</h2>
      <p className="why-subtext">
        A place where learning meets care, safety, and strong values.
      </p>

      <div className="why-cards">
        {cards.map((card, index) => (
          <div className="why-card" key={index}>
            <div className="why-img">
              <img src={card.img} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;