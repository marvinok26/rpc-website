// src/components/CategorySection.js

import React from 'react';
import CategoryTitle from './CategoryTitle';

const CategorySection = ({ title, images }) => {
  return (
    <div className="mb-10 sm:mb-6">
      <CategoryTitle title={title} />
      <div className="flex flex-wrap justify-center items-center overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 m-2 animate-slideIn sm:m-1"
          >
            <img
  src={image}
  alt={`client ${index}`}
  className="w-[300px] h-[120px] transition-transform duration-300 hover:scale-110 sm:w-28"
/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

   