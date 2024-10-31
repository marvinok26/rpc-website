import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import imageDetails from '../data/imageDetailData';
import { ImNext } from "react-icons/im";
import { BiSkipPreviousCircle } from "react-icons/bi";

const ImageDetail = () => {
  const { id, imageId } = useParams();
  const projectData = imageDetails[id];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const imageData = projectData && projectData.projects ? projectData.projects[imageId] : null;
  const memoizedImages = useMemo(() => {
    if (!imageData || !imageData.images) return [];
    return imageData.images.map((image) => image.src);
  }, [imageData]);

  const coverImage = imageData?.images?.[0]?.src || null;

  if (!imageData) {
    return <div>Image not found</div>;
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
    <div className="mt-[1rem]">
      <Helmet>
        <title>{imageData.title || 'Default Title'}</title>
        <meta name="description" content={`View images for ${imageData.title || 'Default Description'}`} />
        <link rel="canonical" href={`your-site-url/${id}/${imageId}`} />
      </Helmet>

      <div className="pt-2">
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 mt-[5rem]">
          <img src={coverImage} alt="cover Image" className="absolute inset-0 w-full h-full object-cover" />

          <div className="h-[300px] relative z-50 max-w-6xl mx-auto flex flex-col justify-center items-start text-left text-white p-6">
            <h1 className="text-10xl sm:text-5xl font-extrabold mb-6">{imageData.title}</h1>
          </div>
        </div>

        <div className="flex justify-center items-start gap-8 p-5">
          {/* Image Section */}
          <div className="flex-shrink-0 w-[400px] h-[400px]">
            <button
              onClick={() => setSelectedImageIndex(0)}
              className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              {coverImage ? (
                <img className="w-full h-full object-cover" src={coverImage} alt="Cover" />
              ) : (
                <span>No Image Available</span>
              )}
            </button>
          </div>

          {/* Text Section */}
          <div className="flex-grow space-y-4">
            <div><h2 className="font-bold">Assignment:</h2><p>{imageData.details?.assignment || 'N/A'}</p></div>
            <div><h2 className="font-bold">Client:</h2><p>{imageData.details?.client || 'N/A'}</p></div>
            <div><h2 className="font-bold">Period:</h2><p>{imageData.details?.period || 'N/A'}</p></div>
            <div><h2 className="font-bold">Status:</h2><p>{imageData.details?.status || 'N/A'}</p></div>
            <div><h2 className="font-bold">Project Outputs:</h2><p>{imageData.details?.projectOutputs.join(', ') || 'N/A'}</p></div>
            <div><h2 className="font-bold">Description:</h2><p>{imageData.details?.description || 'No description available.'}</p></div>
          </div>
        </div>
      </div>

      {/* Full-screen image modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeImage}>
          <div
            className="relative bg-white p-4 mx-4 sm:mx-8 max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fixed top-4 right-4 text-white text-3xl p-2 bg-black rounded-full z-50"
              onClick={closeImage}
            >
              &times;
            </button>

            <img
              src={memoizedImages[selectedImageIndex]}
              alt={`Selected view of ${imageData.title}`}
              className={`w-[700px] h-[500px] object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                isZoomedIn ? 'scale-150' : 'scale-100'
              }`}
              onClick={toggleZoom}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              style={{
                transform: `scale(${isZoomedIn ? 1.5 : 1}) translate(${position.x}px, ${position.y}px)`,
                cursor: isZoomedIn ? 'grab' : 'pointer',
              }}
            />

            {selectedImageIndex > 0 && (
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl" onClick={showPrevImage}>
                <BiSkipPreviousCircle className='text-green-500'/>
              </button>
            )}

            {selectedImageIndex < memoizedImages.length - 1 && (
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl" onClick={showNextImage}>
                <ImNext className='text-green-500'/>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
 