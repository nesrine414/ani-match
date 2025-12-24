import React from "react";
import "./Hero.css";
import userIcon from "../../assets/user-icon.png";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="hero-bg">

      {/* overlay */}
      <div className="hero-overlay"></div>

      {/* user icon (links to login) */}
      <div className="hero-user">
        <Link to="/login" className="user-btn" aria-label="Login">
          <img src={userIcon} alt="User profile" />
        </Link>
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
