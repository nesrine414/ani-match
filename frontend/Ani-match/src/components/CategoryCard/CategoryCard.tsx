import React from "react";
import "./CategoryCard.css";

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <img src={image} alt={title} className="category-image" />
      </div>
      <h3 className="category-title">{title}</h3>
    </div>
  );
};

export default CategoryCard;
