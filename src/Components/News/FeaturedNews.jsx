import React from "react";
import "../../Css/FeaturedNews.css";

const FeaturedNews = () => {
  // Example data for featured news
  const featured = {
    image: "public/galleryfunc/fun.jpg",
    title: "Science Fair ",
    description: "Students showcase innovative projects in the annual science fair.",
    date: "Jan 2, ",
    link: "#", // Link to full news
  };

  return (
    <div className="featured-news">
      <div className="featured-card">
        <img src={featured.image} alt={featured.title} className="featured-image" />
        <div className="featured-content">
          <h2 className="featured-title">{featured.title}</h2>
          <p className="featured-description">{featured.description}</p>
          <div className="featured-footer">
            <span className="featured-date">{featured.date}</span>
            <a href={featured.link} className="read-more">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
