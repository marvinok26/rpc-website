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
    <div className="image-row flex overflow-auto whitespace-nowrap p-0 mt-[5.2rem] gap-0 relative top-0 z-[1]">
      {images.map((src, index) => (
        <img src={src} alt={`Beautiful ${index + 1}`} key={index} className="image w-[200px] h-[200px] object-cover flex-1 border-none inline-block sm:w-40 sm:h-48 xs:w-32 xs:h-32" />
      ))}
    </div>
  );
};

export default ImageRow;
