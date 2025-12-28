import React from "react";
import "./AdoptionFAQs.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const AdoptionFAQs: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Pet Adoption FAQs - Ani-Match',
        text: 'Get answers to all your pet adoption questions!',
        url: window.location.href,
      });
    } else {
      alert('Share feature not supported on this browser');
    }
  };

  return (
    <div className="faqs-page">
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
      <div className="faqs-hero">
        <img 
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80" 
          alt="Pets for adoption"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="faqs-content">
        <div className="content-header">
          <h1 className="page-title">Pet Adoption FAQs</h1>
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
            Thank you for using Ani-Match! We're here to help you every step of the way from 
            "just looking" at adoptable pets, to bringing your pet home, to living a long and 
            happy life with your new family member.
          </p>
          <p>
            Below you'll find answers to the most frequently asked questions about adopting a pet. 
            If you can't find what you're looking for, please don't hesitate to contact us!
          </p>
        </div>

        {/* FAQ Sections */}
        <section className="faq-section">
          <div className="faq-item">
            <h3 className="faq-question">❓ How Do I Search For a Pet?</h3>
            <p className="faq-answer">
              Ani-Match is a searchable database of pets from shelters and rescue groups. To find an 
              adoptable pet, use the "Find a Pet" feature on our homepage. Since our database is updated 
              regularly, we recommend checking back often or creating a saved search email alert to be 
              notified when new pets matching your criteria are added.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🔔 Can I Save My Search or Be Notified When New Pets Are Available?</h3>
            <p className="faq-answer">
              Yes! After performing a search, you'll see a bell icon button to set an email alert. 
              You'll receive notifications when pets matching your search criteria are first posted 
              on the site. Create an account to manage all your saved searches easily.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🐾 Is the Pet I See Still Adoptable?</h3>
            <p className="faq-answer">
              Each shelter and rescue group is responsible for updating their adoptable pet listings. 
              To learn about a specific pet's availability, please contact the shelter or rescue directly 
              by clicking the "Ask About" button on the pet's profile page.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🏠 How Do I Adopt a Pet?</h3>
            <p className="faq-answer">
              Ani-Match is a platform that connects you with shelters and rescue groups. Each organization 
              has its own adoption policies and procedures. To adopt a pet, click the "Ask About" button 
              on the pet's profile to directly contact the organization handling that pet's adoption.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🤝 How Do I Meet a Pet?</h3>
            <p className="faq-answer">
              Once you find a pet you're interested in, go to their profile page by clicking on their 
              picture or name. Click "Ask About" to directly contact the shelter or rescue to arrange 
              a meeting and inquire further about the adoption process.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">📝 Does Contacting Reserve the Pet?</h3>
            <p className="faq-answer">
              No. Submitting an adoption inquiry does not guarantee availability or place a pet "on hold." 
              Pets are available on a first-come, first-served basis. For status updates on your inquiry, 
              please contact the shelter or rescue group directly.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">⏰ How Long Will It Take to Hear Back?</h3>
            <p className="faq-answer">
              Response times vary by organization. Some may respond within minutes, while others may take 
              a few days or a week. Shelters and rescues are often staffed by volunteers and may be handling 
              many inquiries. Don't be afraid to follow up if you haven't heard back!
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">✅ What Are The Requirements For Adopting?</h3>
            <p className="faq-answer">
              Each adoption group has its own rules and requirements. Common requirements may include: 
              application forms, home visits, reference checks, adoption fees, proof of pet-friendly housing, 
              and age requirements. Contact the specific organization for their detailed adoption policies.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🌍 Can I Adopt a Pet From Another Region?</h3>
            <p className="faq-answer">
              It depends on the organization's policies. Some groups allow out-of-area adoptions, while 
              others prefer local adoptions to ensure follow-up support. Contact the organization directly 
              to inquire about their geographical adoption policies and any associated transportation arrangements.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">💰 Will There Be An Adoption Fee?</h3>
            <p className="faq-answer">
              Yes, most organizations charge adoption fees. These fees help cover medical care, food, 
              transportation, and support the rescue's ongoing operations. Fees typically range from 
              50-500 TND depending on the pet's age, breed, and medical care received. Many pets are 
              already spayed/neutered, vaccinated, and microchipped.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">💙 Why Do Organizations Charge Adoption Fees?</h3>
            <p className="faq-answer">
              Adoption fees help cover veterinary care, vaccinations, spaying/neutering, food, shelter, 
              and transportation costs. The fee also acts as a donation to support the organization's 
              continued rescue efforts and helps ensure adopters are committed to caring for their new pet.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🛡️ How Can I Tell If an Organization is Legitimate?</h3>
            <p className="faq-answer">
              All organizations on Ani-Match are carefully screened. Red flags to watch for elsewhere 
              include: refusal to meet in person, requests for payment before meeting the pet, no 
              veterinary references, unwillingness to answer questions, or pressure to decide quickly. 
              Legitimate rescues will want to ensure a good match for both you and the pet.
            </p>
          </div>
        </section>

        <div className="cta-section">
          <h3>Ready to Start Your Adoption Journey?</h3>
          <p>Browse thousands of pets waiting for their forever homes!</p>
          <button className="cta-btn" onClick={() => navigate("/")}>
            Find Your Pet
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="faqs-footer">
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

export default AdoptionFAQs;