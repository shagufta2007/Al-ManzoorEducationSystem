import React, { useState } from "react";
import "../../Css/NewsWithFilters.css";

const NewsWithFilters = () => {
  // Categories
  const categories = ["All", "School Events", "Achievements", "Announcements", "Press & Media"];

  // Example news data
  const newsList = [
    {
      id: 1,
      category: "School Events",
      icon: "🏆",
      title: "Annual Sports Day",
      date: "Jan 1, 2026",
      description: "Students participated in inter-school competitions.",
      link: "#",
    },
    {
      id: 2,
      category: "Achievements",
      icon: "🎓",
      title: "Top Academic Awards",
      date: "Jan 5, 2026",
      description: "Our students achieved top positions in national exams.",
      link: "#",
    },
    {
      id: 3,
      category: "Announcements",
      icon: "📢",
      title: "New Library Books",
      date: "Dec 20, 2025",
      description: "School library updated with latest educational resources.",
      link: "#",
    },
    {
      id: 4,
      category: "Press & Media",
      icon: "📰",
      title: "Brain Smart School in Local News",
      date: "Dec 15, 2025",
      description: "Our school achievements were featured in the local newspaper.",
      link: "#",
    },
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "All"
      ? newsList
      : newsList.filter((news) => news.category === selectedCategory);

  return (
    <div className="news-with-filters">
      <h2 className="news-section-title">Explore News by Category</h2>

      {/* Category Buttons */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {filteredNews.map((news) => (
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

export default NewsWithFilters;
