import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import catImg from "../../assets/cats.jpg";
import dogImg from "../../assets/dogs.jpg";
import hamImg from "../../assets/hamsters.jpg";



const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />

      <section className="categories">
        <CategoryCard title="Cats" image={catImg} />
        <CategoryCard title="Dogs" image={dogImg} />
        <CategoryCard title="Hamsters" image={hamImg} />
      </section>
    </div>
  );
};

export default Home;
