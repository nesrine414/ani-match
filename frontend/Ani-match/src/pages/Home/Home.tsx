import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

import catImg from "../../assets/cats.jpg";
import dogImg from "../../assets/dogs.jpg";

const API_URL = 'http://localhost:5000/api';

interface PetStats {
  totalCats: number;
  totalDogs: number;
}

const Home: React.FC = () => {
  const [stats, setStats] = useState<PetStats>({ totalCats: 0, totalDogs: 0 });

  useEffect(() => {
    // Fetch pet statistics from backend
    fetchPetStats();
  }, []);

  const fetchPetStats = async () => {
    try {
      // Fetch cats count
      const catsResponse = await fetch(`${API_URL}/pets?species=cat`);
      const cats = await catsResponse.json();
      
      // Fetch dogs count
      const dogsResponse = await fetch(`${API_URL}/pets?species=dog`);
      const dogs = await dogsResponse.json();
      
      setStats({
        totalCats: cats.length,
        totalDogs: dogs.length
      });
    } catch (error) {
      console.error('Error fetching pet stats:', error);
    }
  };

  return (
    <div className="home">
      <Hero />

      <section className="categories">
        <Link to="/homecat">
          <CategoryCard 
            title="Cats" 
            image={catImg} 
            count={stats.totalCats}
          />
        </Link>

        <Link to="/homedog">
          <CategoryCard 
            title="Dogs" 
            image={dogImg}
            count={stats.totalDogs}
          />
        </Link>
      </section>
    </div>
  );
};

export default Home;