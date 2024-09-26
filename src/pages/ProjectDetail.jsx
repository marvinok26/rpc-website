// // src/components/ProjectDetail.js

// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { projectDetails } from '../data/projectDetailData';
// import { Helmet } from 'react-helmet';
// import ImageRow from '../components/Images';

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const project = projectDetails[id];

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoomed, setZoomed] = useState(false);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setZoomed(false);
//   };

//   const handleZoomToggle = () => {
//     setZoomed(!zoomed);
//   };

//   const handleClose = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>{project.title} | Your Website Name</title>
//         <meta name="description" content={project.description} />
//         <meta property="og:title" content={project.title} />
//         <meta property="og:description" content={project.description} />
//         <meta property="og:image" content={selectedImage ? selectedImage.src : project.images[0].src} />
//         <meta property="og:url" content={window.location.href} />
//       </Helmet>

//       <div className="project-detail">
//         <h1 className="text-2xl sm:text-4xl sm:my-8 text-[#4263A5] text-center">{project.title}</h1>
//         <div className="images-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {project.images.map((image, index) => (
//             <div
//               key={index}
//               className="relative block no-underline group cursor-pointer"
//             >
//               {id === "county-spatial-plan" ? (
//                 // County Spatial Plan: retain the zoom effect
//                 <img
//                   src={image.src}
//                   alt={image.title}
//                   loading="lazy"
//                   className="w-full h-[500px] object-cover cursor-pointer"
//                   onClick={() => handleImageClick(image)}
//                 />
//               ) : (
//                 // For other projects, link to ImageDetail without zoom
//                 <Link to={`/project/${id}/image/${index + 1}`}>
//                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 sm:bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 z-10">
//                     <h2 className="text-white text-lg sm:text-xl sm:group-hover:opacity-100 opacity-100 sm:opacity-0 transition-opacity duration-300">
//                       {image.title}
//                     </h2>
//                   </div>
//                   <img
//                     src={image.src}
//                     alt={image.title}
//                     loading="lazy"
//                     className="w-full h-[500px] object-cover group-hover:brightness-75 transition-all duration-300"
//                   />
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//         <p className="description mt-4">{project.description}</p>
//       </div>

//       {/* Modal for zoomed images in County Spatial Plan */}
//       {selectedImage && id === "county-spatial-plan" && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={handleClose}
//         >
//           <div className="relative bg-white p-4 mx-4 sm:mx-8 max-w-full max-h-full overflow-auto">
//             <button
//               className="absolute top-4 right-4 text-white text-3xl p-2 bg-black rounded-full z-50"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleClose();
//               }}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.title}
//               loading="lazy"
//               className={`w-[700px] h-[500px] object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
//                 zoomed ? 'scale-150' : 'scale-100'
//               }`}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleZoomToggle();
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectDetail;
