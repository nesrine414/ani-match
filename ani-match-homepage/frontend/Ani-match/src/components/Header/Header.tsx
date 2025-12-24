import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* LEFT: LOGO */}
      <div className="header-left">
        <Link to="/" className="brand">
          <img src={logo} alt="AniMatch Logo" className="logo" />
          <h1 className="title">Ani-Match</h1>
        </Link>
      </div>

      {/* CENTER: NAV (DESKTOP) */}
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

      {/* RIGHT: SOCIAL + HAMBURGER */}
      <div className="header-right">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
