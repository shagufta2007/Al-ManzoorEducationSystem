import React, { useState, useEffect } from "react";
import "../Css/Home_Hero.css";

const images = [
  {
    img: "public/bg1.jpg",
    title: "Shaping Bright Futures Through Quality Education",
    text: "We provide a safe, innovative, and nurturing environment where students grow academically and morally.",
  },
  {
    img: "public/bg2.jpg",
    title: "Shaping Bright Futures Through Quality Education",
    text: "We provide a safe, innovative, and nurturing environment where students grow academically and morally.",
  },
  {
    img: "public/class2.jpg",
    title: "Shaping Bright Futures Through Quality Education",
    text: "We provide a safe, innovative, and nurturing environment where students grow academically and morally.",
  },
];

const Home_Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[index].img})` }}
    >
      <div className="hero-overlay">
        <h1>{images[index].title}</h1>
        <p>{images[index].text}</p>
        <button>📞 Contact Us</button>
      </div>
    </section>
  );
};

export default Home_Hero;