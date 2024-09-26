import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectDetails } from '../data/projectDetailData';
import { Helmet } from 'react-helmet';

const ProjectDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomed(false);
  };

  const handleZoomToggle = () => {
    setZoomed(!zoomed);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Projects | Real Plan Consultants</title>
        <meta name="description" content="Explore various projects by Real Plan Consultants including County Spatial Plans, ISUD Plans, Master Plans, and Urban Renewal & Slum Upgrades." />
      </Helmet>

      <div className="project-detail-container mt-[8rem]">
        {Object.keys(projectDetails).map((projectId) => {
          const project = projectDetails[projectId];
          return (
            <div key={projectId} className="project-section mb-12">
              <h1 className="text-2xl sm:text-4xl sm:my-8 text-[#4263A5] text-center">{project.title}</h1>

              {/* Center images in the grid and apply fixed height and width */}
              <div className="flex flex-wrap justify-center gap-4 p-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative block no-underline group cursor-pointer">
                    {projectId === 'county-spatial-plan' ? (
                      // For County Spatial Plan, use zoom effect without link
                      <img
                        src={image.src}
                        alt={image.title}
                        loading="lazy"
                        className="w-[400px] h-[400px] object-cover cursor-pointer"
                        onClick={() => handleImageClick(image)}
                      />
                    ) : (
                      // For other categories, link to ImageDetail without zoom
                      <Link to={`/project/${projectId}/image/${index + 1}`}>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-opacity duration-300 z-10">
                          <h2 className="text-white text-lg sm:text-xl transition-opacity duration-300">
                            {image.title}
                          </h2>
                        </div>
                        <img
                          src={image.src}
                          alt={image.title}
                          loading="lazy"
                          className="w-[400px] h-[400px] object-cover group-hover:brightness-75 transition-all duration-300"
                        />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <p className="description text-center">{project.description}</p>
            </div>
          );
        })}
      </div>

      {/* Modal for displaying zoomed images in County Spatial Plan */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative bg-white p-4 mx-4 sm:mx-8 max-w-full max-h-full overflow-auto">
            <button
              className="absolute top-4 right-4 text-white text-3xl p-2 bg-black rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="lazy"
              className={`w-[700px] h-[500px] object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                zoomed ? 'scale-150' : 'scale-100'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleZoomToggle();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
