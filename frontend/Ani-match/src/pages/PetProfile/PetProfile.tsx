import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { FaUser } from "react-icons/fa";
import loraImage from "../../assets/lora.jpg";
import "./PetProfile.css";

interface Pet {
  id?: number;
  name: string;
  img?: string;      // utilisé par HomePage
  image?: string;    // utilisé par Profile
  age?: string;
  gender?: string;
  location?: string;
  breed?: string;
  size?: string;
  description?: string;
  personality?: string[];
  health?: string[];
}

interface PetProfileProps {
  pet?: Pet;           // si on passe le pet directement
  source?: "profile" | "homepage";  // permet de savoir d’où on vient
}

const PetProfile: React.FC<PetProfileProps> = ({ pet, source }) => {
  const [isAdopted, setIsAdopted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const locationPet = (location.state as Pet | undefined) ?? undefined;
  const displayPet = pet ?? locationPet;

  if (!displayPet) {
    navigate("/");
    return null;
  }

  const handleAdoptClick = () => {
    navigate("/adopt", { state: displayPet });
    setIsAdopted(true);
  };

  const handleBackHome = () => navigate("/");

  // Détecte la source pour choisir l'image
  const petImage =
    source === "profile"
      ? displayPet.image ?? loraImage
      : displayPet.img ?? loraImage;

  return (
    <div className="pet-profile-container">
      <h1 className="page-title">{displayPet.name ?? "Pet Profile"}</h1>

      <div className="pet-box">
        <div className="pet-info">
          <p><strong>Name:</strong> {displayPet.name ?? "—"}</p>
          <p><strong>Age:</strong> {displayPet.age ?? "—"}</p>
          <p><strong>Gender:</strong> {displayPet.gender ?? "—"}</p>
          <p><strong>Location:</strong> {displayPet.location ?? "—"}</p>
          <p><strong>Breed:</strong> {displayPet.breed ?? "Domestic Shorthair"}</p>
          <p><strong>Size:</strong> {displayPet.size ?? "Small"}</p>
        </div>

        <img className="pet-img" src={petImage} alt={displayPet.name ?? "Pet"} />
      </div>

      <h2 className="section-title">Know more about {displayPet.name ?? "this pet"}</h2>

      <div className="owner-box">
        <div className="owner-header">
          {source === "profile" ? <FaUser className="owner-icon" /> : "👤"}
          <strong>Owner Information</strong>
        </div>

        <p className="owner-text">{displayPet.description ?? "No description available."}</p>

        <div className="personality">
          <strong>Personality:</strong><br />
          <div className="traits">
            {displayPet.personality?.length
              ? displayPet.personality.map((trait, i) => <span key={i} className="trait-tag">{trait}</span>)
              : <>
                  <span className="trait-tag">Friendly</span>
                  <span className="trait-tag">Playful</span>
                  <span className="trait-tag">Affectionate</span>
                </>}
          </div>
        </div>

        <div className="health-status">
          <strong>Health Status:</strong><br />
          {displayPet.health?.length
            ? displayPet.health.map((item, i) => <div key={i} className="health-item">• {item}</div>)
            : <div className="health-item">• No health info available</div>}
        </div>

        <div className="requirements">
          <strong>Adoption Requirements:</strong><br />
          <div className="requirement-item">• Loving home environment</div>
          <div className="requirement-item">• Regular veterinary care</div>
          <div className="requirement-item">• Commitment to lifelong care</div>
        </div>

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

        <button className="back-btn" onClick={handleBackHome}>⬅ Back Home</button>
      </div>
    </div>
  );
};

export default PetProfile;
