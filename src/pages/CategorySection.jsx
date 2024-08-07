// src/components/CategorySection.js
import React from 'react';
import CategoryTitle from './CategoryTitle'; // Ensure this component is correctly implemented

const CategorySection = ({ title, images }) => {
  return (
    <div className="category-section">
      <CategoryTitle title={title} />
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`client ${index}`} className="client-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
