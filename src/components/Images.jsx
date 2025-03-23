import React from 'react';

// Import images directly
import image1 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0206.webp';
import image2 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Agro_Ecological Zones_ AUGUST 2021.webp';
import image3 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0533.webp';
import image4 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Ecotourism Model.webp';
import image5 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0861.webp';

const images = [
  { src: image1, alt: 'Aerial view of the county spatial plan area' },
  { src: image2, alt: 'Agro-ecological zones of the county' },
  { src: image3, alt: 'View of the county spatial planning project' },
  { src: image4, alt: 'Ecotourism model promoting sustainability' },
  { src: image5, alt: 'Lush landscape within the county plan' },
];

const ImageRow = () => {
  return (
    <div className="relative w-full">
      {/* Gradient overlay to ensure navbar text is visible */}
      <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-black/50 to-transparent z-20"></div>
      
      <div className="flex overflow-hidden w-full mt-0 top-0 z-10">
        {images.map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            key={index}
            className="h-[260px] object-cover flex-1 border-none"
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageRow;