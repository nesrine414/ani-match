import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">

      {/* IMAGE À GAUCHE */}
      <div className="hero-left">
        <img src={heroImage} alt="Hero animal" className="hero-img" />
      </div>

      {/* CONTENU DE DROITE */}
      <div className="hero-content">

        {/* SEARCHBAR + ICON PROFILE */}
        <div className="top-right">
          <div className="searchbar">
            <i className="search-icon">🔍</i>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="profile-icon">
            <i>👤</i>
          </div>
        </div>

        {/* TEXTE PRINCIPAL */}
        <h2 className="hero-title">Find your new best friend today</h2>
      </div>
    </section>
  );
};

export default Hero;
