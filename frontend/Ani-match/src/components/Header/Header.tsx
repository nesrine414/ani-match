import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import userAvatar from "../../assets/user.jpg"; // use existing avatar icon as fallback
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* LEFT: LOGO + USER PROFILE */}
      <div className="header-left">
        <Link to="/" className="brand">
          <img src={logo} alt="AniMatch Logo" />
          <h1 className="title">Ani-Match</h1>
        </Link>

        {/* USER PROFILE IMAGE */}
        <img
          src={userAvatar}
          alt="User Profile"
          className="user-avatar"
          onClick={() => navigate("/profile")}
        />
      </div>

      {/* CENTER: NAV */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          WHO ARE WE?
        </NavLink>
        <NavLink
          to="/adopt"
          className="nav-link highlight"
          onClick={() => setMenuOpen(false)}
        >
          ADOPT
        </NavLink>
      </nav>

      {/* RIGHT */}
      <div className="header-right">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
