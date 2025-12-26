import React, { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeDog.css";
import dog1 from "../../assets/dog1.jpg";
import dog2 from "../../assets/dog2.jpg";
import dog3 from "../../assets/dog3.jpg";
import dog4 from "../../assets/dog4.jpg";
import dog5 from "../../assets/dog5.jpg";
import dog6 from "../../assets/dog6.jpg";
import logoImage from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

// Définition du type pour un animal
interface Pet {
  id: number;
  name: string;
  img: string;
  age?: string;
  gender?: string;
  location?: string;
  description?: string;
  health?: string[];
  personality?: string[];
  breed?: string;
  size?: string;
}

// Props du composant HomePage
interface HomePageProps {
  onSelectPet?: (pet: Pet) => void;
}

// Liste des animaux
const pets: Pet[] = [
  {
    id: 1,
    name: "Tango",
    img: dog1,
    age: "3 months",
    gender: "Male",
    location: "Sousse, Tunisia",
    description: "Tango is a friendly dog that loves to play with children.",
    health: ["Vaccinated", "Sterilized", "De-wormed"],
    personality: ["Friendly", "Playful", "Affectionate", "Curious"],
    breed: "Domestic Shorthair",
    size: "Small",
  },
  {
    id: 2,
    name: "bella",
    img:dog2
  },
  {
    id: 3,
    name: "Cleo",
    img: dog3
  },
  {
    id: 4,
    name: "koukou",
    img: dog4
  },
  {
    id: 5,
    name: "simba",
    img: dog5
  },
  {
    id: 6,
    name: "Cloo",
    img: dog6
  },
  // Tu peux ajouter d'autres pets ici...
];

const HomeDog: React.FC<HomePageProps> = ({ onSelectPet }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handlePetClick = (pet: Pet) => {
    onSelectPet?.(pet);
    // Navigate to the PetProfile route and pass the pet via location state
   navigate("/pet-profile", { state: pet });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, pet: Pet) => {
    if (e.key === "Enter") handlePetClick(pet);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="pet-profile-container">
      {/* NAVBAR */}
      

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      

      <h1 className="page-title">6 PETS FOUND IN TUNISIA</h1>

      <div className="pet-grid">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="pet-card"
            onClick={() => handlePetClick(pet)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, pet)}
          >
            <img src={pet.img} alt={pet.name} />
            <button className="adopt-btn">ADOPT ME</button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default HomeDog;
