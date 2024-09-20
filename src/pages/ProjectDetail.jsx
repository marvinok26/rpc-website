// src/components/ProjectDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageRow from '../components/Images';
import { projectDetails } from '../data/projectDetailData';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>{project.title} | Your Website Name</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={selectedImage ? selectedImage.src : project.images[0].src} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <ImageRow />
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
                loading="lazy" // Lazy loading for images
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
          <div className="relative bg-white p-4 mx-4 sm:mx-8 max-w-full max-h-full overflow-auto">
            <button
              className="absolute top-4 right-4 text-white text-3xl p-2 bg-black rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing when clicking the button
                handleClose(); // Close the modal on button click
              }}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="lazy" // Lazy loading for the zoomed image
              className={`w-[700px] h-[500px] object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                zoomed ? 'scale-150' : 'scale-100'
              }`} // Fixed width and height
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing when clicking the image
                handleZoomToggle(); // Zoom in/out on image click
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
