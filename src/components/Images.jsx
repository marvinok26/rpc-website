// src/components/ImageRow.js

import React from 'react';
import '../styles/Images.css'; 

// Import images directly
import image1 from '../Assets/Images/buildings/university-library-4825366_1280.jpg';
import image2 from '../Assets/Images/buildings/skyscraper-8373617_1280.jpg';
import image3 from '../Assets/Images/buildings/city-4667143_1280.jpg';
import image4 from '../Assets/Images/buildings/skyscraper-8366040_1280.jpg';
import image5 from '../Assets/Images/buildings/nyc-4854718_1280.jpg';

const images = [image1, image2, image3, image4, image5];

const ImageRow = () => {
  return (
    <div className="image-row">
      {images.map((src, index) => (
        <img src={src} alt={`Beautiful ${index + 1}`} key={index} className="image" />
      ))}
    </div>
  );
};

export default ImageRow;
