import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import imageDetails from '../data/imageDetailData'; // Import the image data

const ImageDetail = () => {
  const { id, imageId } = useParams(); // 'id' is project slug, 'imageId' is the image index
  const imageData = imageDetails[id]?.[imageId];

  // State to manage the clicked image and zoom toggle
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false); // Zoom state

  // Memoize the images for performance, with a fallback for loading
  const memoizedImages = useMemo(() => {
    if (!imageData) return null; // Fallback if imageData is not available

    return imageData.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${imageData.title} - image ${index + 1}`} // More descriptive alt text
        loading="lazy" // Lazy load images
        className="w-[400px] h-[400px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 cursor-pointer"
        onClick={() => setSelectedImage(image)} // Set clicked image as selected
      />
    ));
  }, [imageData]); // Add imageData as a dependency for useMemo

  if (!imageData) {
    return <div>Image not found</div>; // Return early if imageData is not found
  }

  // Handlers
  const closeImage = () => {
    setSelectedImage(null);
    setIsZoomedIn(false); // Reset zoom when closing the image
  };

  const toggleZoom = () => {
    setIsZoomedIn((prev) => !prev); // Toggle zoom state
  };

  return (
    <div className='mt-[2rem]'>
      <Helmet>
        <title>{imageData.title} - Your Site Name</title>
        <meta name="description" content={`View images for ${imageData.title}`} />
        <link rel="canonical" href={`your-site-url/${id}/${imageId}`} />
      </Helmet>


      <div className="pt-20">
        <h1 className="text-2xl sm:text-4xl sm:my-8 text-[#4263A5] text-center">{imageData.title}</h1>

        {/* Image Grid with Centered Images and Fixed Size */}
        <div className="flex flex-wrap justify-center gap-4 p-5">
          {memoizedImages}
        </div>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
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

            <img
              src={selectedImage}
              alt={`Selected view of ${imageData.title}`} // More descriptive alt text
              className={`w-[700px] h-[500px] object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                isZoomedIn ? 'scale-150' : 'scale-100'
              }`} // Fixed width and height for zoomed image
              onClick={toggleZoom} // Toggle zoom on image click
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
