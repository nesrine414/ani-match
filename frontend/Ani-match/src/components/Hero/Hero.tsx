import React, { useState } from "react";
import "./Hero.css";
import userIcon from "../../assets/user-icon.png";
import { Link, useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle search when user presses Enter or clicks search icon
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle search as user types (optional - for live search)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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
        <form className="searchbar" onSubmit={handleSearch}>
          <span 
            className="search-icon" 
            onClick={handleSearch}
            style={{ cursor: 'pointer' }}
          >
            🔍
          </span>
          <input 
            type="text" 
            placeholder="Search pets..." 
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch(e);
              }
            }}
          />
        </form>

        <h1 className="hero-title">
          Find your new best friend today
        </h1>
      </div>
    </section>
  );
};

export default Hero;