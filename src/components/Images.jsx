import React from 'react';

// Import images directly
import image1 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0206.webp';
import image2 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Agro_Ecological Zones_ AUGUST 2021.webp';
import image3 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0861.webp';
import image4 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Ecotourism Model.webp';
import image5 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0533.webp';

const images = [
  { src: image1, alt: 'Aerial view of the county spatial plan area' },
  { src: image2, alt: 'Agro-ecological zones of the county' },
  { src: image3, alt: 'Lush landscape within the county plan' },
  { src: image4, alt: 'Ecotourism model promoting sustainability' },
  { src: image5, alt: 'View of the county spatial planning project' }
];

const ImageRow = () => {
  return (
    <div className="image-row flex overflow-auto whitespace-nowrap p-0 mt-[5.2rem] gap-0 relative top-0 z-[1]">
      {images.map((image, index) => (
        <img
          src={image.src}
          alt={image.alt}
          key={index}
          className="image w-[200px] h-[200px] object-cover flex-1 border-none inline-block sm:w-40 sm:h-48 xs:w-32 xs:h-32"
        />
      ))}
    </div>
  );
};

export default ImageRow;
