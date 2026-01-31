import React from "react";
import "../../Css/NewsGrid.css";

const NewsGrid = () => {
  // Example news data
  const newsList = [

    {
      id: 1,
      icon: "🏆",
      title: "Annual Sports Day",
      date: "1 Jan ",
      description: "Students participated in inter-school competitions.",
      link: "#",
    },
    {
      id: 2,
      icon: "🎨",
      title: "Art Exhibition",
      date: "28 Dec",
      description: "Creative artworks displayed by our students.",
      link: "#",
    },
    {
      id: 3,
      icon: "📚",
      title: "New Library Books",
      date: "20 Dec",
      description: "School library updated with latest educational resources.",
      link: "#",
    },
    {
      id: 4,
      icon: "🎓",
      title: "Science Fair 2026",
      date: "2 Jan  ",
      description: "Students showcase innovative projects in the annual science fair.",
      link: "#",
    },
  ];

  return (
    
    <div className="programs-container">
      <h2 className="programs-heading">Our Programs</h2>
    <p><b>Stay updated with all the events, achievements, and announcements at Brain Smart School.</b></p>
    <div className="news-grid">
      
      {newsList.map((news) => (
      
        <div key={news.id} className="news-card">
          <div className="news-icon">{news.icon}</div>
          <div className="news-content">
            <h3 className="news-title">{news.title}</h3>
            <p className="news-date">{news.date}</p>
            <p className="news-description">{news.description}</p>
            <a href={news.link} className="news-readmore">
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NewsGrid;
