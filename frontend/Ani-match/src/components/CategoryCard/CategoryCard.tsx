import React from "react";
import "./CategoryCard.css";

interface CategoryCardProps {
  title: string;
  image: string;
  count?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count }) => {
  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <img src={image} alt={title} className="category-image" />
        {typeof count === 'number' && (
          <span className="category-count">{count}</span>
        )}
      </div>
      <h3 className="category-title">{title}</h3>
    </div>
  );
};

export default CategoryCard;
