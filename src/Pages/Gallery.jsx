// src/Pages/Gallery.jsx
import React, { useState } from "react";
import "../Css/Gallery.css";
import Announcements from "../Components/Contacts/Announcements";

const images = [
  "public/galleryfunc/fff.jpg",
  "public/galleryfunc/fun6.jpg",
  "public/galleryfunc/fun7.jpg",
  "public/galleryfunc/hg.jpg",
  "public/galleryfunc/posi1.jpg",
  "public/galleryfunc/posi2.jpg",
  "public/galleryfunc/posi4.jpg",
  "public/galleryfunc/pp.jpg",
  "public/galleryfunc/pp9.jpg",
  "public/galleryfunc/ppp.jpg",
  "public/galleryfunc/pppp.jpg",
  "public/galleryfunc/ppppp.jpg",
  "public/galleryfunc/uuu.jpg",
  "public/galleryfunc/t6.jpg",
  "public/galleryfunc/t4.jpg",
  "public/galleryfunc/t1.jpg",
  "public/galleryfunc/fun3.jpg",
  "public/galleryfunc/fun.jpg",
  "public/Gallerytrip/arywa.jpg",
  "public/galleryfunc/ttttt.jpg",
  "public/Gallerytrip/g1.jpg",
  "public/Gallerytrip/g2.jpg",
  "public/Gallerytrip/g3.jpg",
  "public/Gallerytrip/g4.jpg",
  "public/Gallerytrip/g5.jpg",
  "public/Gallerytrip/ghg.jpg",
  "public/Gallerytrip/gj.jpg",
  "public/Gallerytrip/hum.jpg",
  "public/Gallerytrip/t8.jpg",
  "public/Gallerytrip/tip4.jpg",
  "public/Gallerytrip/trip1.jpg",
  "public/Gallerytrip/trip2.jpg",
  "public/Gallerytrip/trip3.jpg",
  "public/Gallerytrip/tt3.jpg",
  "public/Gallerytrip/tt5.jpg",
  "public/Gallerytrip/tt6.jpg",
  "public/Gallerytrip/ttt.jpg",
  "public/Gallerytrip/tttt.jpg",
  "public/Gallerytrip/wao.jpg",
  "public/Gallerytrip/zoo.jpg",
  "public/Gallerytrip/zoo3.jpg",
  "public/g.jpg",
  "public/img5.jpg",
  "public/gg.jpg",
  "public/gg1.jpg",
  "public/gg3.jpg",
  "public/gg4.jpg",
  "public/hanji.jpg",

  
  
  // jitni marzi images yahan add karti jao
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h2 className="gallery-title">Our School Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>

          <img
            src={images[currentIndex]}
            className="lightbox-image"
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="prev-btn" onClick={prevImage}>
            &#10094;
          </button>

          <button className="next-btn" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}

      <Announcements />
    </div>
  );
};

export default Gallery;
