import React from "react";
import "./DogYears.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const DogYears: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'How Old Is A Dog In Human Years? - Ani-Match',
        text: 'Learn to translate dog years to human years!',
        url: window.location.href,
      });
    } else {
      alert('Share feature not supported on this browser');
    }
  };

  return (
    <div className="dog-years-page">
      {/* Header */}
      <img src={logo} alt="AniMatch Logo" className="corner-logo" />
      
      <div className="corner-user" onClick={() => navigate("/login")} title="Login">
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
      <div className="dog-years-hero">
        <img 
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80" 
          alt="Senior dog"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="dog-years-content">
        <div className="content-header">
          <h1 className="page-title">How Old Is A Dog In Human Years?</h1>
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
            Dog years are multiplied by seven to get a human age, as a dog lifespan is a seventh 
            of a person's. Converting dog years to human years depends on various factors as toy, 
            small, medium, large and giant dogs mature differently, which is why dogs up to 50 lbs. 
            can live longer than pups up to 100 lbs.
          </p>
          <p>
            Experts agree that the level of maturity a dog reaches in the first two years is similar 
            to that of a 14-year-old human, but that is where the similarity ends. The age of a pup 
            in dog years to human years depends on breed, size, weight, activity level, diet, lifestyle, 
            health, and lifespan.
          </p>
        </div>

        <section className="age-tables-section">
          <h2 className="section-title">Comparing Age: Dog Years vs Human Years</h2>
          <p className="section-intro">
            While most pet parents have been calculating their pup's dog to human years for the longest 
            time, the method has no basis of truth and is mostly just for entertainment. Just for fun, 
            take a look at the dog years converter below.
          </p>

          {/* Toy Dogs Table */}
          <div className="age-table-card">
            <h3 className="table-title">🐕 Toy Size Dogs (Up to 10 lbs)</h3>
            <p className="breeds-list">
              Chihuahua, Japanese Chin, Maltese, Manchester Terrier, Papillion, Pomeranian, 
              Toy Fox Terrier, Yorkshire Terrier
            </p>
            <div className="age-table">
              <div className="table-row header-row">
                <div className="table-cell">Dog Age</div>
                <div className="table-cell">Human Age</div>
              </div>
              <div className="table-row"><div className="table-cell">1 year</div><div className="table-cell">15 years</div></div>
              <div className="table-row"><div className="table-cell">2 years</div><div className="table-cell">23 years</div></div>
              <div className="table-row"><div className="table-cell">5 years</div><div className="table-cell">35 years</div></div>
              <div className="table-row"><div className="table-cell">10 years</div><div className="table-cell">52 years</div></div>
              <div className="table-row"><div className="table-cell">15 years</div><div className="table-cell">70 years</div></div>
            </div>
          </div>

          {/* Small Dogs Table */}
          <div className="age-table-card">
            <h3 className="table-title">🐕 Small Size Dogs (Up to 20 lbs)</h3>
            <p className="breeds-list">
              Beagle, Boston Terrier, Dachshund, French Bulldog, Pug, Scottish Terrier, 
              Shih Tzu, West Highland White Terrier
            </p>
            <div className="age-table">
              <div className="table-row header-row">
                <div className="table-cell">Dog Age</div>
                <div className="table-cell">Human Age</div>
              </div>
              <div className="table-row"><div className="table-cell">1 year</div><div className="table-cell">15 years</div></div>
              <div className="table-row"><div className="table-cell">2 years</div><div className="table-cell">23 years</div></div>
              <div className="table-row"><div className="table-cell">5 years</div><div className="table-cell">36 years</div></div>
              <div className="table-row"><div className="table-cell">10 years</div><div className="table-cell">56 years</div></div>
              <div className="table-row"><div className="table-cell">15 years</div><div className="table-cell">76 years</div></div>
              <div className="table-row"><div className="table-cell">20 years</div><div className="table-cell">96 years</div></div>
            </div>
          </div>

          {/* Medium Dogs Table */}
          <div className="age-table-card">
            <h3 className="table-title">🐕 Medium Size Dogs (Up to 50 lbs)</h3>
            <p className="breeds-list">
              Australian Cattle Dog, Border Collie, Bulldog, Cocker Spaniel, English Springer Spaniel, 
              Shetland Sheepdog, Whippet
            </p>
            <div className="age-table">
              <div className="table-row header-row">
                <div className="table-cell">Dog Age</div>
                <div className="table-cell">Human Age</div>
              </div>
              <div className="table-row"><div className="table-cell">1 year</div><div className="table-cell">15 years</div></div>
              <div className="table-row"><div className="table-cell">2 years</div><div className="table-cell">24 years</div></div>
              <div className="table-row"><div className="table-cell">5 years</div><div className="table-cell">38 years</div></div>
              <div className="table-row"><div className="table-cell">10 years</div><div className="table-cell">60 years</div></div>
              <div className="table-row"><div className="table-cell">15 years</div><div className="table-cell">83 years</div></div>
            </div>
          </div>

          {/* Large Dogs Table */}
          <div className="age-table-card">
            <h3 className="table-title">🐕 Large Size Dogs (50+ lbs)</h3>
            <p className="breeds-list">
              Boxer, Collie, German Shepherd, Golden Retriever, Labrador Retriever, Siberian Husky
            </p>
            <div className="age-table">
              <div className="table-row header-row">
                <div className="table-cell">Dog Age</div>
                <div className="table-cell">Human Age</div>
              </div>
              <div className="table-row"><div className="table-cell">1 year</div><div className="table-cell">15 years</div></div>
              <div className="table-row"><div className="table-cell">2 years</div><div className="table-cell">23 years</div></div>
              <div className="table-row"><div className="table-cell">5 years</div><div className="table-cell">35 years</div></div>
              <div className="table-row"><div className="table-cell">10 years</div><div className="table-cell">52 years</div></div>
              <div className="table-row"><div className="table-cell">15 years</div><div className="table-cell">70 years</div></div>
            </div>
          </div>

          {/* Giant Dogs Table */}
          <div className="age-table-card">
            <h3 className="table-title">🐕 Giant Size Dogs (100+ lbs)</h3>
            <p className="breeds-list">
              Great Dane, Mastiff, Newfoundland, Rottweiler, Saint Bernard
            </p>
            <div className="age-table">
              <div className="table-row header-row">
                <div className="table-cell">Dog Age</div>
                <div className="table-cell">Human Age</div>
              </div>
              <div className="table-row"><div className="table-cell">1 year</div><div className="table-cell">15 years</div></div>
              <div className="table-row"><div className="table-cell">2 years</div><div className="table-cell">23 years</div></div>
              <div className="table-row"><div className="table-cell">5 years</div><div className="table-cell">35 years</div></div>
              <div className="table-row"><div className="table-cell">10 years</div><div className="table-cell">52 years</div></div>
              <div className="table-row"><div className="table-cell">13 years</div><div className="table-cell">63 years</div></div>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h3>Find Your Perfect Companion</h3>
          <p>No matter the age, there are thousands of adoptable dogs looking for homes!</p>
          <button className="cta-btn" onClick={() => navigate("/")}>
            Browse Dogs
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="dog-years-footer">
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

export default DogYears;