import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


// county spatial images
import img1 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Agro_Ecological Zones_ AUGUST 2021.webp';
import img2 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/County Land Use Plan.webp';
import img3 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0206.webp';
import img4 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0533.webp';
import img5 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0861.webp';
import img6 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/Ecotourism Model.webp';

// ISUD images
import img8 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 1 NKU/CBD EXPANSION DESIGN CONCEPT 2.webp';
import img9 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 1 NKU/CBD EXPANSION DESIGN CONCEPT.webp';
import img10 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 1 NKU/CBD EXPANSION.webp';
import img11 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 1 NKU/Nakuru_LandUse A3.webp';
import img12 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 1 NKU/TOD.webp';
import img13 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 1 NKU/Transport Plan.webp';

// master plans
import img14 from '../Assets/PROJECTS BATCH 1/MASTER PLAN 1 RED TILE.webp';
import img15 from '../Assets/PROJECTS BATCH 1/MASTER PLAN 2 ALBIZZIA TILE.webp';

// Urban Renewal & Slum Upgrades
import img16 from '../Assets/PROJECTS BATCH 1/URBAN RENEWAL TILE.webp';
import img17 from '../Assets/PROJECTS BATCH 1/SLUM UPGRADE TILE.webp';
import ImageRow from '../components/Images';

// Project data with slugs 
const projectDetails = {
  "county-spatial-plan": {
    title: "County Spatial Plan",
    images: [
      { src: img1, title: "Agro Ecological Zones" },
      { src: img2, title: "County Land Use Plan" },
      { src: img3, title: "DJI 0206" },
      { src: img4, title: "DJI 0533" },
      { src: img5, title: "DJI 0861" },
      { src: img6, title: "Ecotourism Model" },
    ],
    description: "This is a detailed description of County Spatial Plan.",
  },
  "isud-plans": {
    title: "ISUD Plans",
    images: [
      { src: img8, title: "NAKURU" },
      { src: img9, title: "NAIVASHA" },
      { src: img10, title: "NYERI" },
      { src: img11, title: "MANDERA" },
      { src: img12, title: "MERU" },
      { src: img13, title: "MTWAPA" },
    ],
    description: "This is a detailed description of ISUD Plans.",
  },
  "master-plans": {
    title: "Master Plans",
    images: [
      { src: img14, title: "MASTER PLAN 1" },
      { src: img15, title: "MASTER PLAN 2" },
    ],
    description: "This is a detailed description of Master Plans.",
  },
  "urban-renewal-slum-upgrades": {
    title: "Urban Renewal & Slum Upgrades",
    images: [
      { src: img16, title: "URBAN RENEWAL" },
      { src: img17, title: "SLUM UPGRADE" },
    ],
    description: "This is a detailed description of Urban Renewal & Slum Upgrades.",
  },
};


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomed(false); // Reset zoom on new image click
  };

  const handleZoomToggle = () => {
    setZoomed(!zoomed); // Toggle zoom state
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="project-detail">
        <h1 className="text-2xl sm:text-4xl sm:my-8 text-[#4263A5] text-center">{project.title}</h1>
        <div className="images-gallery grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative block no-underline group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </div>
        <p className="description">{project.description}</p>
      </div>

      {/* Modal for displaying the clicked image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClose} // Clicking outside the image closes the modal
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className={`transition-transform duration-300 ease-in-out ${zoomed ? 'scale-150' : 'scale-100'} cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking the image
              handleZoomToggle(); // Zoom in/out on image click
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;