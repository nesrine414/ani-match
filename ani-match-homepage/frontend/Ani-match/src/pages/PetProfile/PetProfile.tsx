import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";
import loraImage from "../../assets/lora.jpg";
import logoImage from "../../assets/logo.png";

import "./PetProfile.css";

// Définir le type Pet
interface Pet {
  id?: number;
  name: string;
  img?: string;
  age?: string;
  gender?: string;
  location?: string;
  breed?: string;
  size?: string;
  description?: string;
  personality?: string[];
  health?: string[];
}

// Définir les props pour le composant
interface PetProfileProps {
  pet?: Pet;
}

const PetProfile: React.FC<PetProfileProps> = ({ pet }) => {
  const [isAdopted, setIsAdopted] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // If the route was navigated to with state (navigate('/PetProfile', { state: pet }))
  // prefer that pet, otherwise fall back to the prop or undefined.
  const locationPet = (location.state as Pet | undefined) ?? undefined;
  const displayPet = pet ?? locationPet;

  const handleAdoptClick = () => {
    // Navigate to the Adopt page and pass the current pet in location.state
    navigate("/adopt", { state: displayPet });
  };

  const handleBackHome = () => {
    navigate("/"); 
  };
  if (!displayPet) {
  navigate("/");
  return null;
}


  return (
    <div className="pet-profile-container">
      {/* Navigation Header */}
      

     
      {/* Pet Name Title */}
      <h1 className="page-title">{displayPet?.name ?? "Pet Profile"}</h1>

      {/* Pet Information Section */}
      <div className="pet-box">
        <div className="pet-info">
          <p><strong>Name:</strong> {displayPet?.name ?? "—"}</p>
          <p><strong>Age:</strong> {displayPet?.age ?? "—"}</p>
          <p><strong>Gender:</strong> {displayPet?.gender ?? "—"}</p>
          <p><strong>Location:</strong> {displayPet?.location ?? "—"}</p>
          <p><strong>Breed:</strong> {displayPet?.breed ?? "Domestic Shorthair"}</p>
          <p><strong>Size:</strong> {displayPet?.size ?? "Small"}</p>
        </div>

        <img
          className="pet-img"
          src={/* prefer pet.img if provided, else fallback */ displayPet?.img ?? loraImage}
          alt={`${displayPet?.name ?? "Pet"} the cat`}
        />
      </div>

      {/* About Section */}
      <h2 className="section-title">Know more about {displayPet?.name ?? "this pet"}</h2>

      <div className="owner-box">
        <div className="owner-header">
          <div className="owner-icon">👤</div>
          <strong>Owner Information</strong>
        </div>

        <p className="owner-text">{displayPet?.description ?? "No description available."}</p>

        {/* Personality Traits */}
        <div className="personality">
          <strong>Personality:</strong><br />
          <div className="traits">
            {displayPet?.personality?.map((trait, index) => (
              <span key={index} className="trait-tag">{trait}</span>
            )) || (
              <>
                <span className="trait-tag">Friendly</span>
                <span className="trait-tag">Playful</span>
                <span className="trait-tag">Affectionate</span>
              </>
            )}
          </div>
        </div>

        {/* Health Status */}
        <div className="health-status">
          <strong>Health Status:</strong><br />
          {displayPet?.health?.map((item, index) => (
            <div key={index} className="health-item">• {item}</div>
          ))}
        </div>

        {/* Requirements */}
        <div className="requirements">
          <strong>Adoption Requirements:</strong><br />
          <div className="requirement-item">• Loving home environment</div>
          <div className="requirement-item">• Regular veterinary care</div>
          <div className="requirement-item">• Commitment to lifelong care</div>
        </div>

        {/* Adopt Button */}
        <button 
          className={`adopt-btn ${isAdopted ? 'adopted' : ''}`}
          onClick={handleAdoptClick}
          disabled={isAdopted}
        >
          {isAdopted ? "ADOPTION REQUESTED ✓" : "ADOPT ME"}
        </button>

        {isAdopted && (
          <div className="adoption-message">
            Thank you! We'll contact you within 24 hours to discuss the adoption process.
          </div>
        )}

        {/* Back Home Button */}
        
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default PetProfile;
