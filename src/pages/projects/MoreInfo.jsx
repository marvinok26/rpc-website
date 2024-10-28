// src/components/MoreInfo.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';

const MoreInfo = () => {
  const { id } = useParams();
  const projectImages = projectData[id];

  if (!projectImages) return <p>Project not found</p>;

  return (
    <div className="more-info-container mt-[8rem] p-8">
      <h1 className="text-3xl font-bold mb-8">{id.replace(/-/g, ' ').toUpperCase()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectImages.map((image, index) => (
          <Link key={index} to={`/project/${id}/image/${index + 1}`} className="relative group">
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
