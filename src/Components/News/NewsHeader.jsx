import React from "react";
import "../../Css/NewsHeader.css"; // Styling ke liye separate CSS

const NewsHeader = () => {
  return (
    <div className="news-header">
      <h1 className="news-heading">
        Latest <span className="highlight">News & Updates</span>
      </h1>
      <p className="news-subheading">
        Stay updated with all the events, achievements, and announcements at Brain Smart School.
      </p>
    </div>
  );
};

export default NewsHeader;
