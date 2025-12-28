import React from "react";
import "./AdoptionChecklist.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const AdoptionChecklist: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Pet Adoption Checklist - Ani-Match',
        text: 'Check out this helpful pet adoption checklist!',
        url: window.location.href,
      });
    } else {
      alert('Share feature not supported on this browser');
    }
  };

  return (
    <div className="checklist-page">
      {/* Header */}
      <img src={logo} alt="AniMatch Logo" className="corner-logo" />
      
      <div
        className="corner-user"
        onClick={() => navigate("/login")}
        title="Login"
      >
        <svg width="60" height="60" viewBox="0 0 100 60" fill="none">
          <g fill="#3098B7">
            <rect x="0" y="15" width="25" height="3" rx="1.5" />
            <rect x="0" y="25" width="25" height="3" rx="1.5" />
            <rect x="0" y="35" width="25" height="3" rx="1.5" />
            <circle cx="65" cy="20" r="15" />
            <path d="M45 55C45 42 52 38 65 38C78 38 85 42 85 55V60H45V55Z" />
          </g>
        </svg>
      </div>

      {/* Hero Section */}
      <div className="checklist-hero">
        <img 
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80" 
          alt="Happy dog with owner"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="checklist-content">
        <div className="content-header">
          <h1 className="page-title">Pet Adoption Checklist</h1>
          <button className="share-btn" onClick={handleShare}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            SHARE
          </button>
        </div>

        <div className="intro-text">
          <p>
            Congratulations on adopting a pet! You are embarking on a wonderful and rewarding 
            relationship. Because adopting a new pet comes with a lot of change for both pet 
            and pet parent, we've compiled a checklist to help make the transition as smooth 
            as possible.
          </p>
        </div>

        <section className="questions-section">
          <h2 className="section-title">Questions for All Adopters:</h2>
          <ul className="questions-list">
            <li>Do you have any other pets and how will they react to a new pet?</li>
            <li>Is your current residence suited to the pet you're considering?</li>
            <li>How will your social life or work obligations affect your ability to care for a pet?</li>
            <li>Do you have a plan for your new pet during vacations and/or work travel?</li>
            <li>How do the people you live with feel about having a pet in the house?</li>
            <li>Are you (or your spouse, partner or roommate) intolerant of hair, dirt and other inconveniences associated with a pet?</li>
            <li>Can you afford veterinary care including a medical emergency?</li>
            <li>Are you prepared to keep your pet for his or her entire lifetime, up to 15-20 years for dogs and cats?</li>
          </ul>
        </section>

        <section className="questions-section">
          <h2 className="section-title">Before Bringing Your Pet Home:</h2>
          <ul className="questions-list">
            <li>Choose a veterinarian and schedule a first appointment</li>
            <li>Purchase necessary supplies (food, bowls, leash, collar, ID tag, bed, toys)</li>
            <li>Pet-proof your home by removing hazardous items</li>
            <li>Set up a designated space for your new pet</li>
            <li>Research pet insurance options</li>
            <li>Plan the first few days at home to help your pet adjust</li>
            <li>Discuss pet care responsibilities with family members</li>
            <li>Stock up on cleaning supplies for accidents</li>
          </ul>
        </section>

        <section className="questions-section">
          <h2 className="section-title">First Week Essentials:</h2>
          <ul className="questions-list">
            <li>Maintain the pet's previous diet initially to avoid stomach upset</li>
            <li>Establish a routine for feeding, walks, and playtime</li>
            <li>Begin house training or litter box training immediately</li>
            <li>Introduce your pet to family members gradually</li>
            <li>Take photos and videos to document the journey</li>
            <li>Monitor your pet's eating, drinking, and bathroom habits</li>
            <li>Provide plenty of love, patience, and positive reinforcement</li>
            <li>Schedule training classes or behaviorist consultation if needed</li>
          </ul>
        </section>

        <div className="cta-section">
          <h3>Ready to Find Your Perfect Match?</h3>
          <p>Browse our available pets and start your adoption journey today!</p>
          <button className="cta-btn" onClick={() => navigate("/")}>
            Browse Pets
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="checklist-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Ani-Match</h3>
              <p>🐾 Connecting hearts & paws</p>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>📞 +216 56889 6789</p>
              <p>✉️ pets@pets.tn</p>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <p>Facebook • Instagram</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdoptionChecklist;