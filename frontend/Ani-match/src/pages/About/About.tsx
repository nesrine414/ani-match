import React from "react";
import "./About.css";
import logo from "../../assets/logo.svg";

const About: React.FC = () => {
  return (
    <div className="about-page">
      
      {/* Top Left Logo */}
      <img src={logo} alt="AniMatch Logo" className="corner-logo" />
      
      {/* Top Right User Icon (SVG) */}
      <div className="corner-user">
        <svg width="60" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#3098B7"> {/* J'ai mis le bleu de ton thème */}
            <rect x="0" y="15" width="25" height="3" rx="1.5"/>
            <rect x="0" y="25" width="25" height="3" rx="1.5"/>
            <rect x="0" y="35" width="25" height="3" rx="1.5"/>
            <circle cx="65" cy="20" r="15"/>
            <path d="M45 55C45 42 52 38 65 38C78 38 85 42 85 55V60H45V55Z"/>
          </g>
        </svg>
      </div>

      <main className="about-main">
        <h1 className="about-title">Who are we?</h1>
        
        {/* Nouvelle structure : Carte avec Texte + Image */}
        <div className="about-card">
          <div className="about-text-content">
            <p>
              At <strong>Ani-Match</strong>, we are a team of passionate animal lovers, 
              rescuers, and tech enthusiasts dedicated to bridging the gap between 
              homeless pets and loving families.
            </p>
            <p>
              We believe every paw deserves a home. Our mission is to make adoption 
              simple, transparent, and joyful for everyone involved.
            </p>
            
          </div>
          
          <div className="about-image-content">
            {/* Image d'exemple de haute qualité (tu pourras la changer) */}
            <img 
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80" 
              alt="Our Team and Pets" 
            />
          </div>
        </div>
      </main>

      {/* Footer Moderne */}
      <footer className="about-footer">
        <div className="footer-grid">
            
            {/* Colonne 1 : Marque */}
            <div className="footer-col brand-col">
                <h3>Ani-Match</h3>
                <p>Connecting hearts & paws.</p>
            </div>

            {/* Colonne 2 : Contact */}
            <div className="footer-col contact-col">
                <h4>Contact Us</h4>
                <div className="contact-row">
                    <span>📞</span> <p>+216 56889 6789</p>
                </div>
                <div className="contact-row">
                    <span>✉️</span> <p>pets@pets.tn</p>
                </div>
            </div>

            {/* Colonne 3 : Social & Copyright */}
            <div className="footer-col social-col">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <span>Facebook</span> • <span>Instagram</span>
                </div>
                
            </div>
        </div>
      </footer>
    </div>
  );
};

export default About;