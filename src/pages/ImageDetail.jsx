import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import imageDetails from '../data/imageDetailData'; // Import the image data

const ImageDetail = () => {
  const { id, imageId } = useParams(); // 'id' is project slug, 'imageId' is the image index
  const projectData = imageDetails[id]; // Get the project data for the given id
  const imageData = projectData ? projectData[imageId] : null; // Get the specific image data for the project

  // State to manage the clicked image and zoom toggle
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Default to null to hide image initially
  const [isZoomedIn, setIsZoomedIn] = useState(false); // Zoom state

  // Memoize the images for performance
  const memoizedImages = useMemo(() => {
    if (!imageData || !imageData.images) return []; // Fallback if imageData or images are not available

    return imageData.images.map((image) => image); // Map to an array of image URLs
  }, [imageData]);

  // Determine the cover image (first image in the category)
  const coverImage = projectData && projectData[1] ? projectData[1].images[0] : null;

  if (!imageData) {
    return <div>Image not found</div>; // Return early if imageData is not found
  }

  // Handlers
  const closeImage = () => {
    setSelectedImageIndex(null); // Reset when closing
    setIsZoomedIn(false); // Reset zoom when closing the image
  };

  const toggleZoom = () => {
    setIsZoomedIn((prev) => !prev); // Toggle zoom state
  };

  const showNextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % memoizedImages.length; // Wrap around to the first image
    setSelectedImageIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const prevIndex = (selectedImageIndex - 1 + memoizedImages.length) % memoizedImages.length; // Wrap around to the last image
    setSelectedImageIndex(prevIndex);
  };

  return (
    <div className='mt-[2rem]'>
      <Helmet>
        <title>{imageData.title || 'Default Title'}</title>
        <meta name="description" content={`View images for ${imageData.title || 'Default Description'}`} />
        <link rel="canonical" href={`your-site-url/${id}/${imageId}`} />
      </Helmet>

      <div className="pt-20">
        <h1 className="text-2xl sm:text-4xl sm:my-8 text-[#4263A5] text-center">{imageData.title}</h1>

        {/* Image and description layout */}
        <div className="flex flex-wrap justify-center items-start gap-4 p-5">
          {/* Image Section - Display only a clickable area for the image */}
          <div className="flex-shrink-0 w-[400px] h-[400px]">
            {/* Display the first image from the category */}
            <button
              onClick={() => setSelectedImageIndex(0)} // Click to show the first image in modal
              className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              {coverImage ? (
                <img className="w-full h-full object-cover" src={coverImage} alt="Cover" />
              ) : (
                <span>No Image Available</span> // Fallback if there's no image
              )}
            </button>
          </div>

          {/* Description Section */}
          <div className="flex-grow p-4">
            <p>{projectData.description}</p> {/* Use the description from projectData */}
          </div>
        </div>
      </div>

      {/* Full-screen image modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage} // Close modal when clicking outside the image
        >
          <div
            className="relative bg-white p-4 mx-4 sm:mx-8 max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="fixed top-4 right-4 text-white text-3xl p-2 bg-black rounded-full z-50"
              onClick={closeImage} // Close button
            >
              &times;
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={showPreviousImage} // Previous image button
              disabled={memoizedImages.length <= 1} // Disable if there's only one image
            >
              &lt;
            </button>

            <img
              src={memoizedImages[selectedImageIndex]}
              alt={`Selected view of ${imageData.title}`} // More descriptive alt text
              className={`w-[700px] h-[500px] object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                isZoomedIn ? 'scale-150' : 'scale-100'
              }`} // Fixed width and height for zoomed image
              onClick={toggleZoom} // Toggle zoom on image click
            />

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={showNextImage} // Next image button
              disabled={memoizedImages.length <= 1} // Disable if there's only one image
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
