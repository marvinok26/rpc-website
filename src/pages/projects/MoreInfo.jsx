// src/components/MoreInfo.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';

const MoreInfo = () => {
  const { id } = useParams();
  const projectImages = projectData[id];

  if (!projectImages) return <p>Project not found</p>;

  return (
    <div className="more-info-container mt-[6rem] ">
      <div className="relative font-sans">
        <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src={projectImages[0]?.src}
            alt="Cover Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="h-[300px] relative z-50 max-w-6xl mx-auto flex flex-col justify-center items-start text-left text-white p-6">
            <h1 className="text-10xl sm:text-5xl font-extrabold mb-6">
            {id.replace(/-/g, ' ').toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {projectImages.map((image, index) => (
          <Link
            key={index}
            to={`/project/${id}/image/${index + 1}`}
            className="relative group"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-[300px] object-cover rounded-lg group-hover:opacity-75 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg">{image.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreInfo;
