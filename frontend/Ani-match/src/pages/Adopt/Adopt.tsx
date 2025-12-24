import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Adopt.css";
import logo from "../../assets/logo.svg";

const Adopt: React.FC = () => {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  // ⏳ Redirect after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  useEffect(() => {
    // fetch adopt info
    fetch('http://localhost:5000/api/adopt')
      .then(r => r.json())
      .then(d => setServerMessage(d.instructions || null))
      .catch(() => {});
  }, []);

  return (
    <div className="adopt-page">

      {/* ===== HEADER ===== */}
      <img src={logo} alt="AniMatch Logo" className="corner-logo" />

      {/* User Icon → Login */}
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

      {/* ===== MAIN ===== */}
      <main className="adopt-main">
        <div className="adopt-card">
          <h2>Adoption Request</h2>

          {!submitted ? (
            <form
              className="adopt-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const data = {
                  email,
                };
                try {
                  await fetch('http://localhost:5000/adopt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                } catch (err) {
                  // ignore
                }
                setSubmitted(true);
              }}
            >
              <label>Email address</label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Phone number</label>
              <input type="tel" required placeholder="+216 00 000 000" />

              <label>Full name</label>
              <input type="text" required placeholder="Your full name" />

              <div className="form-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => navigate(-1)}
                >
                  Retour
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <h3>🎉 Félicitations !</h3>
              <p>
                Merci <strong>{email}</strong> 💌 <br />
                Votre demande d’adoption a été
                <strong> bien prise en charge</strong>.
              </p>
              <p className="redirect-text">
                Redirection automatique dans 3 secondes...
              </p>

              <button
                className="return-btn"
                onClick={() => setSubmitted(false)}
              >
                🔁 Retour au formulaire
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="about-footer">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3>Ani-Match</h3>
            <p>Connecting hearts & paws.</p>
          </div>

          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <div className="contact-row">
              <span>📞</span> <p>+216 56889 6789</p>
            </div>
            <div className="contact-row">
              <span>✉️</span> <p>pets@pets.tn</p>
            </div>
          </div>

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

export default Adopt;
