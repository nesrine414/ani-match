import React, { useState } from "react";
import "./Hero.css";
import userIcon from "../../assets/user-icon.png";
import { Link, useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <section className="hero-bg">
      <div className="hero-overlay"></div>

      <div className="hero-user">
        <Link to="/login" className="user-btn">
          <img src={userIcon} alt="User profile" />
        </Link>
      </div>

      <div className="hero-content">
        <div className="searchbar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search pets..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <h1 className="hero-title">
          Find your new best friend today
        </h1>
      </div>
    </section>
  );
};

export default Hero;
