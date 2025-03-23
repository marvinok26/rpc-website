import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import imageDetails from '../data/imageDetailData';
import { ImNext, ImPrevious } from "react-icons/im";
import { FiMaximize, FiMinimize, FiX } from "react-icons/fi";
import { BsImages } from "react-icons/bs";

const ImageDetail = () => {
  const { id, imageId } = useParams();
  const projectData = imageDetails[id];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageData = projectData && projectData.projects ? projectData.projects[imageId] : null;
  const memoizedImages = useMemo(() => {
    if (!imageData || !imageData.images) return [];
    return imageData.images.map((image) => image.src);
  }, [imageData]);

  const coverImage = imageData?.images?.[0]?.src || null;

  // Format the project and image title for display
  const formatTitle = (str) => {
    return str
      ?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') || '';
  };

  const formattedProjectTitle = formatTitle(id);
  
  if (!imageData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-red-600 mb-2">Project Not Found</h2>
          <p className="text-neutral-600">The project or image you are looking for does not exist.</p>
          <Link to="/projects" className="mt-6 inline-block bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const closeImage = () => {
    setSelectedImageIndex(null);
    setIsZoomedIn(false);
    setPosition({ x: 0, y: 0 });
  };

  const toggleZoom = () => {
    setIsZoomedIn(!isZoomedIn);
    setPosition({ x: 0, y: 0 }); // Reset position when toggling zoom
  };

  const handleMouseDown = (e) => {
    if (isZoomedIn) {
      setIsDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const showNextImage = () => {
    if (selectedImageIndex < memoizedImages.length - 1) {
      setSelectedImageIndex((prev) => prev + 1);
      setIsZoomedIn(false); // Reset zoom
      setPosition({ x: 0, y: 0 }); // Reset position
    }
  };
  
  const showPrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prev) => prev - 1);
      setIsZoomedIn(false); // Reset zoom
      setPosition({ x: 0, y: 0 }); // Reset position
    }
  };

  return (
    <>
      <Helmet>
        <title>{imageData.title || 'Project Detail'} | Real Plan Consultants</title>
        <meta name="description" content={`View details for ${imageData.title || 'our project'}`} />
        <link rel="canonical" href={`your-site-url/${id}/${imageId}`} />
      </Helmet>

      {/* Hero Section with Cover Image - Full height extending behind navbar */}
      <div className="relative h-[60vh] md:h-[70vh]">
        {/* Semi-transparent gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10"></div>
        
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={imageData.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-primary-600/20"></div>
        )}

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent z-20"></div>
       

        {/* Hero Content */}
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center pt-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
              {imageData.title}
            </h1>
            <div className="w-20 h-1 bg-primary-600 mb-6"></div>
            <p className="text-white/90 text-lg max-w-2xl">
              {imageData.details?.assignment || ''}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Gallery Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-primary-600 mb-4 pb-2 border-b border-neutral-200">Project Gallery</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {imageData.images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <FiMaximize className="text-white text-xl" />
                    </div>
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={image.src} 
                      alt={image.alt || `Project image ${index + 1}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Primary Project View */}
            <div 
              onClick={() => setSelectedImageIndex(0)}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
            >
              {coverImage ? (
                <>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <BsImages className="text-white text-3xl" />
                  </div>
                  <img 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={coverImage} 
                    alt={imageData.title} 
                  />
                </>
              ) : (
                <div className="w-full h-64 bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-500">No Image Available</span>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-xl font-bold text-primary-600 mb-6 pb-2 border-b border-neutral-200">Project Details</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h3 className="font-bold text-neutral-800 mb-2">Assignment</h3>
                    <p className="text-neutral-600">{imageData.details?.assignment || 'N/A'}</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h3 className="font-bold text-neutral-800 mb-2">Client</h3>
                    <p className="text-neutral-600">{imageData.details?.client || 'N/A'}</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h3 className="font-bold text-neutral-800 mb-2">Period</h3>
                    <p className="text-neutral-600">{imageData.details?.period || 'N/A'}</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h3 className="font-bold text-neutral-800 mb-2">Status</h3>
                    <p className={`font-medium ${
                      imageData.details?.status?.toLowerCase().includes('complete') 
                        ? 'text-green-600' 
                        : 'text-amber-600'
                    }`}>
                      {imageData.details?.status || 'N/A'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-md">
                  <h3 className="font-bold text-neutral-800 mb-2">Project Outputs</h3>
                  <div className="text-neutral-600">
                    {Array.isArray(imageData.details?.projectOutputs) && imageData.details.projectOutputs.length > 0 
                      ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {imageData.details.projectOutputs.map((output, index) => (
                            <li key={index}>{output}</li>
                          ))}
                        </ul>
                      )
                      : <p>No project outputs available.</p>}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3">Description</h3>
                  <div className="bg-neutral-50 p-4 rounded-md text-neutral-600">
                    {Array.isArray(imageData.details?.description) 
                      ? imageData.details.description.map((desc, index) => (
                          <p key={index} className="mb-4">{desc}</p>
                        ))
                      : <p>No description available.</p>}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-primary-600/10 rounded-lg p-6 border border-primary-600/30">
              <h3 className="font-bold text-primary-600 mb-3">Interested in Similar Projects?</h3>
              <p className="mb-4 text-neutral-700">We specialize in {formattedProjectTitle} and other urban planning solutions.</p>
              <Link 
                to="/contact" 
                className="inline-block bg-primary-600 text-white py-2 px-6 rounded hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen image modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50" 
          onClick={closeImage}
        >
          <div
            className="relative max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 flex gap-2 z-50">
              <button
                className="text-white text-xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={toggleZoom}
                aria-label={isZoomedIn ? "Zoom out" : "Zoom in"}
              >
                {isZoomedIn ? <FiMinimize /> : <FiMaximize />}
              </button>
              
              <button
                className="text-white text-xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeImage}
                aria-label="Close image"
              >
                <FiX />
              </button>
            </div>

            <img
              src={memoizedImages[selectedImageIndex]}
              alt={`Selected view of ${imageData.title}`}
              className={`max-w-[90vw] max-h-[80vh] object-contain transition-transform duration-300 ${
                isZoomedIn ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
              }`}
              onClick={toggleZoom}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                transform: `scale(${isZoomedIn ? 1.5 : 1}) translate(${position.x}px, ${position.y}px)`,
              }}
              draggable="false"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 rounded-full px-4 py-2 text-white text-sm z-50">
              Image {selectedImageIndex + 1} of {memoizedImages.length}
            </div>

            {selectedImageIndex > 0 && (
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" 
                onClick={showPrevImage}
                aria-label="Previous image"
              >
                <ImPrevious className="text-white" />
              </button>
            )}

            {selectedImageIndex < memoizedImages.length - 1 && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" 
                onClick={showNextImage}
                aria-label="Next image"
              >
                <ImNext className="text-white" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageDetail;