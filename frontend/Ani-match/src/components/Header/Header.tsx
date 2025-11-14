import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg" ;

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="AniMatch Logo" className="logo" />
        <h1 className="title">Ani-Match</h1>
      </div>
      <div className="social-icons">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-whatsapp"></i>
  </a>
</div>


      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Who Are We</li>
          <li>Adopt</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;