import React from "react";
import "./Hero.css";
import userIcon from "../../assets/user-icon.png";

const Hero: React.FC = () => {
  return (
    <section className="hero-bg">

      {/* overlay */}
      <div className="hero-overlay"></div>

      {/* user icon */}
      <div className="hero-user">
        <button
          type="button"
          className="user-btn"
          onClick={() => alert("User icon clicked")}
        >
          <img src={userIcon} alt="User profile" />
        </button>
      </div>

      {/* content */}
      <div className="hero-content">
        <div className="searchbar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search pets..." />
        </div>

        <h1 className="hero-title">
          Find your new best friend today
        </h1>
      </div>

    </section>
  );
};

export default Hero;
