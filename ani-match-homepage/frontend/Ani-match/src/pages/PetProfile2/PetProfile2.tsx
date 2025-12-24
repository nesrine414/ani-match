import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";
import loraImage from "../../assets/lora.jpg";
import logoImage from "../../assets/logo.png";

import "../PetProfile/PetProfile.css";

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

interface PetProfile2Props {
  pet?: Pet;
}

const PetProfile2: React.FC<PetProfile2Props> = ({ pet }) => {
  const [isAdopted, setIsAdopted] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const locationPet = (location.state as Pet | undefined) ?? undefined;

  // sample Tango fallback
  const sampleTango: Pet = {
    id: 999,
    name: "Tango",
    img: loraImage,
    age: "3 months",
    gender: "Male",
    location: "Ariana, Tunisia",
    description: "Tango is a playful young dog who loves attention and cuddles.",
    health: ["Vaccinated", "Sterilized", "De-wormed"],
    personality: ["Friendly", "Playful", "Affectionate"],
    breed: "Mixed Breed",
    size: "Small",
  };

  const displayPet = pet ?? locationPet ?? sampleTango;

  const handleAdoptClick = () => {
    // Navigate to the Adopt page and pass the current pet in location.state
    navigate("/adopt", { state: displayPet });
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="pet-profile-container">
      <h1 className="page-title">{displayPet?.name ?? "Pet Profile"}</h1>

      <div className="pet-box">
        <div className="pet-info">
          <p>
            <strong>Name:</strong> {displayPet?.name ?? "—"}
          </p>
          <p>
            <strong>Age:</strong> {displayPet?.age ?? "—"}
          </p>
          <p>
            <strong>Gender:</strong> {displayPet?.gender ?? "—"}
          </p>
          <p>
            <strong>Location:</strong> {displayPet?.location ?? "—"}
          </p>
          <p>
            <strong>Breed:</strong> {displayPet?.breed ?? "Mixed Breed"}
          </p>
          <p>
            <strong>Size:</strong> {displayPet?.size ?? "Small"}
          </p>
        </div>

        <img className="pet-img" src={displayPet?.img ?? loraImage} alt={`${displayPet?.name ?? "Pet"}`} />
      </div>

      <h2 className="section-title">Know more about {displayPet?.name ?? "this pet"}</h2>

      <div className="owner-box">
        <div className="owner-header">
          <div className="owner-icon">👤</div>
          <strong>Owner Information</strong>
        </div>

        <p className="owner-text">{displayPet?.description ?? "No description available."}</p>

        <div className="personality">
          <strong>Personality:</strong>
          <br />
          <div className="traits">
            {displayPet?.personality?.map((trait, index) => (
              <span key={index} className="trait-tag">
                {trait}
              </span>
            )) || (
              <>
                <span className="trait-tag">Friendly</span>
                <span className="trait-tag">Playful</span>
                <span className="trait-tag">Affectionate</span>
              </>
            )}
          </div>
        </div>

        <div className="health-status">
          <strong>Health Status:</strong>
          <br />
          {displayPet?.health?.map((item, index) => (
            <div key={index} className="health-item">
              • {item}
            </div>
          ))}
        </div>

        <div className="requirements">
          <strong>Adoption Requirements:</strong>
          <br />
          <div className="requirement-item">• Loving home environment</div>
          <div className="requirement-item">• Regular veterinary care</div>
          <div className="requirement-item">• Commitment to lifelong care</div>
        </div>

        <button className={`adopt-btn ${isAdopted ? "adopted" : ""}`} onClick={handleAdoptClick} disabled={isAdopted}>
          {isAdopted ? "ADOPTION REQUESTED ✓" : "ADOPT ME"}
        </button>

        {isAdopted && (
          <div className="adoption-message">
            Thank you! We'll contact you within 24 hours to discuss the adoption process.
          </div>
        )}

        <button className="back-home-btn" onClick={handleBackHome}>
          ← Back Home
        </button>
      </div>
    </div>
  );
};

export default PetProfile2;
