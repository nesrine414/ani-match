import React from "react";
import "./About.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      
      {/* Header */}
      <img src={logo} alt="AniMatch Logo" className="corner-logo" />
      
      <div className="corner-user" onClick={() => navigate("/login")}>
        <svg width="60" height="60" viewBox="0 0 100 60" fill="none">
          <g fill="#3098B7">
            <rect x="0" y="15" width="25" height="3" rx="1.5"/>
            <rect x="0" y="25" width="25" height="3" rx="1.5"/>
            <rect x="0" y="35" width="25" height="3" rx="1.5"/>
            <circle cx="65" cy="20" r="15"/>
            <path d="M45 55C45 42 52 38 65 38C78 38 85 42 85 55V60H45V55Z"/>
          </g>
        </svg>
      </div>

      <main className="about-main">
        {/* Hero Section avec titre stylisé */}
        <div className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">🐾 About Us</span>
            <h1 className="hero-title">
              Who are <span className="gradient-text">we?</span>
            </h1>
            <p className="hero-subtitle">
              Bridging hearts and paws, one match at a time
            </p>
          </div>
        </div>

        {/* Main Content Card - Disposition plus dynamique */}
        <div className="content-wrapper">
          <div className="about-grid">
            {/* Grande image à gauche */}
            <div className="image-section">
              <div className="image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" 
                  alt="Happy dog with flower" 
                />
                <div className="image-overlay">
                  <div className="overlay-badge">
                    <span className="heart-icon">❤️</span>
                    <span>500+ Adoptions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Texte à droite avec style cards */}
            <div className="text-section">
              <div className="info-card primary-card">
                <div className="card-icon">🏠</div>
                <h3>Our Mission</h3>
                <p>
                  At <strong>Ani-Match</strong>, we are a team of passionate animal lovers, 
                  rescuers, and tech enthusiasts dedicated to bridging the gap between 
                  homeless pets and loving families.
                </p>
              </div>

              <div className="info-card secondary-card">
                <div className="card-icon">💙</div>
                <h3>Our Vision</h3>
                <p>
                  We believe every paw deserves a home. Our mission is to make adoption 
                  simple, transparent, and joyful for everyone involved.
                </p>
              </div>

              <div className="stats-row">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Adoptions</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Rescue Partners</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section valeurs avec icônes */}
        <div className="values-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h4>Transparency</h4>
              <p>Complete pet profiles with health records and history</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Support</h4>
              <p>Guidance throughout the adoption journey</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h4>Care</h4>
              <p>Post-adoption follow-up and resources</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer amélioré */}
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <h3>Ani-Match</h3>
              <p className="tagline">🐾 Connecting hearts & paws</p>
              <p className="description">
                Making the world a better place, one adoption at a time.
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/adopt">Adopt</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+216 56889 6789</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>pets@pets.tn</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Tunis, Tunisia</span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-btn">
                  <span>📘</span> Facebook
                </a>
                <a href="#" className="social-btn">
                  <span>📸</span> Instagram
                </a>
                <a href="#" className="social-btn">
                  <span>🐦</span> Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Ani-Match. Made with ❤️ for animals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;