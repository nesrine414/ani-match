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
    </div>
  );
};

export default Home;
