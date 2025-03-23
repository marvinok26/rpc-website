import React from 'react';
import CategoryTitle from './CategoryTitle';

const CategorySection = ({ title, images, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-10 hover:shadow-lg transition-all duration-300 ${className}`}>
      <CategoryTitle title={title} />
      
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center p-4 bg-gradient-to-b from-neutral-50 to-white rounded-md border border-neutral-100 hover:border-primary-200 transition-all duration-300"
            style={{ height: '140px' }}
          >
            <img
              src={image}
              alt={`${title} client ${index + 1}`}
              className="max-h-[120px] max-w-full object-contain transition-all duration-300 hover:scale-105"
              style={{ 
                filter: "contrast(1.2) brightness(1.1)",
                mixBlendMode: "multiply"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;