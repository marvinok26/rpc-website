import React from 'react';

const CategoryTitle = ({ title }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-bold text-primary-600 border-b border-neutral-200 pb-3">
        {title}
      </h2>
    </div>
  );
};

export default CategoryTitle;