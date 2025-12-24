import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import catImg from "../../assets/cats.jpg";
import dogImg from "../../assets/dogs.jpg";




const Home: React.FC = () => {
  const [info, setInfo] = useState<{ title?: string } | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/home')
      .then((r) => r.json())
      .then(setInfo)
      .catch(() => {});
  }, []);
  return (
    <div className="home">
      <Hero />

      <section className="categories">
        {info?.title && <h2 className="home-info">{info.title}</h2>}
        <CategoryCard title="Cats" image={catImg} />
        <CategoryCard title="Dogs" image={dogImg} />
       
      </section>
    </div>
  );
};

export default Home;
