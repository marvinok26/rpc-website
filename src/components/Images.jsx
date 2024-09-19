// src/components/ImageRow.js

import React from 'react';

// Import images directly
import image1 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0206.webp';
import image2 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Agro_Ecological Zones_ AUGUST 2021.webp';
import image3 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0861.webp';
import image4 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Ecotourism Model.webp';
import image5 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0533.webp';

const images = [image1, image2, image3, image4, image5];

const ImageRow = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap py-0 mt-20 gap-0 relative z-10">
      {images.map((src, index) => (
        <img
          src={src}
          alt={`Beautiful ${index + 1}`}
          key={index}
          className="w-48 h-48 object-cover flex-shrink-0 border-none inline-block sm:w-40 sm:h-40 xs:w-32 xs:h-32"
        />
      ))}
    </div>
  );
};

export default ImageRow;
