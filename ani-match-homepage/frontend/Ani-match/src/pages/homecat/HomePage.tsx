import React, { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import loraImg from "../../assets/lora.jpg";
import cat1 from "../../assets/cat1.jpg";
import cat2 from "../../assets/cat2.jpg";
import cat3 from "../../assets/cat3.jpg";
import cat4 from "../../assets/cat4.jpg";
import cat5 from "../../assets/cat5.jpg";
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
    name: "Lora",
    img: loraImg,
    age: "2 months",
    gender: "Female",
    location: "Ariana, Tunisia",
    description: "Lora is a friendly cat that loves to play with children.",
    health: ["Vaccinated", "Sterilized", "De-wormed"],
    personality: ["Friendly", "Playful", "Affectionate", "Curious"],
    breed: "Domestic Shorthair",
    size: "Small",
  },
  { id: 2, name: "Milo", img: cat1 },
  { id: 3, name: "Cleo", img: cat2 },
  { id: 4, name: "Koukou", img: cat3 },
  { id: 5, name: "Cle", img: cat4 },
  { id: 6, name: "Cl", img: cat5 },
  // Tu peux ajouter d'autres pets ici...
];

const HomePage: React.FC<HomePageProps> = ({ onSelectPet }) => {
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

export default HomePage;
