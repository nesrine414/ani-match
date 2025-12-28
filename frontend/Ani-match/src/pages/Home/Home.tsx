import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

import catImg from "../../assets/cats.jpg";
import dogImg from "../../assets/dogs.jpg";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />

      <section className="categories">
        <Link to="/homecat">
          <CategoryCard title="Cats" image={catImg} />
        </Link>

        <Link to="/homedog">
          <CategoryCard title="Dogs" image={dogImg} />
        </Link>
      </section>

      {/* ===== INFO CARDS SECTION ===== */}
      <section className="info-cards-section">
        <div className="info-cards-container">
          {/* Card 1 - Checklist */}
          <Link to="/adoption-checklist" style={{ textDecoration: 'none' }}>
            <div className="info-card">
              <div className="info-icon">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10 L60 30 L50 25 L40 30 Z" fill="#3098B7"/>
                  <circle cx="35" cy="45" r="4" fill="#3098B7"/>
                  <circle cx="45" cy="45" r="4" fill="#3098B7"/>
                  <circle cx="55" cy="45" r="4" fill="#3098B7"/>
                  <circle cx="65" cy="45" r="4" fill="#3098B7"/>
                  <path d="M30 55 Q35 65 50 70 Q65 65 70 55" stroke="#3098B7" strokeWidth="3" fill="none"/>
                  <path d="M25 75 Q50 85 75 75" stroke="#3098B7" strokeWidth="4" fill="none"/>
                </svg>
              </div>
              <h3 className="info-title">CHECKLIST FOR NEW ADOPTERS</h3>
              <p className="info-description">
                Make the adoption transition as smooth as possible.
              </p>
              <button className="info-btn">LEARN MORE</button>
            </div>
          </Link>

          {/* Card 2 - Dog Years */}
          <Link to="/dog-years" style={{ textDecoration: 'none' }}>
            <div className="info-card">
              <div className="info-icon">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="50" cy="35" rx="25" ry="20" fill="#3098B7"/>
                  <ellipse cx="35" cy="30" rx="8" ry="10" fill="#3098B7"/>
                  <ellipse cx="65" cy="30" rx="8" ry="10" fill="#3098B7"/>
                  <circle cx="42" cy="32" r="3" fill="white"/>
                  <circle cx="58" cy="32" r="3" fill="white"/>
                  <ellipse cx="50" cy="40" rx="4" ry="6" fill="white"/>
                  <path d="M40 45 Q50 50 60 45" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M30 60 Q35 75 50 80 Q65 75 70 60 L50 55 Z" fill="#3098B7"/>
                </svg>
              </div>
              <h3 className="info-title">HOW OLD IS A DOG IN HUMAN YEARS?</h3>
              <p className="info-description">
                Learn to translate dog years to human years just for fun, and vice versa. Finally answer how old your dog is!
              </p>
              <button className="info-btn">LEARN MORE</button>
            </div>
          </Link>

          {/* Card 3 - FAQs */}
          <Link to="/adoption-faqs" style={{ textDecoration: 'none' }}>
            <div className="info-card">
              <div className="info-icon">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <circle cx="35" cy="35" r="20" fill="#3098B7"/>
                  <circle cx="65" cy="35" r="20" fill="#3098B7"/>
                  <path d="M30 32 L40 32 M60 32 L70 32" stroke="white" strokeWidth="3"/>
                  <circle cx="35" cy="32" r="2" fill="white"/>
                  <circle cx="65" cy="32" r="2" fill="white"/>
                  <path d="M20 55 Q30 45 35 50 Q40 45 50 50 Q60 45 65 50 Q70 45 80 55" 
                        stroke="#3098B7" strokeWidth="4" fill="none"/>
                  <text x="45" y="80" fontSize="35" fill="#3098B7" fontWeight="bold">A</text>
                  <text x="30" y="75" fontSize="25" fill="#3098B7">Q</text>
                </svg>
              </div>
              <h3 className="info-title">PET ADOPTION FAQS</h3>
              <p className="info-description">
                Get answer to all the you questions you haven't thought of for your adoption.
              </p>
              <button className="info-btn">LEARN MORE</button>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== ARTICLES SECTION ===== */}
      <section className="articles-section">
        <div className="articles-container">
          {/* Dog Articles */}
          <Link to="/dog-articles" style={{ textDecoration: 'none' }}>
            <div className="article-card">
              <div className="article-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80" 
                  alt="Dog on couch" 
                  className="article-image"
                />
                <div className="article-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80"
                    alt="Dog avatar"
                  />
                </div>
              </div>
              <div className="article-content">
                <h3 className="article-title">Dog Adoption Articles</h3>
                <p className="article-description">Learn more about caring for your new dog</p>
                <button className="article-btn">READ MORE</button>
              </div>
            </div>
          </Link>

          {/* Cat Articles */}
          <Link to="/cat-articles" style={{ textDecoration: 'none' }}>
            <div className="article-card">
              <div className="article-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80" 
                  alt="Cat being held" 
                  className="article-image"
                />
                <div className="article-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80"
                    alt="Cat avatar"
                  />
                </div>
              </div>
              <div className="article-content">
                <h3 className="article-title">Cat Adoption Articles</h3>
                <p className="article-description">Helpful insights on what to expect.</p>
                <button className="article-btn">READ MORE</button>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;