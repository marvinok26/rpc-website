import React from 'react';
import { useParams } from 'react-router-dom';

import "../styles/ProjectDetail.css"

import img1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import img2 from '../Assets/Images/buildings/building-8373615_1280.jpg';
import img3 from '../Assets/Images/buildings/buildings-7848348_1280.jpg';
import img4 from '../Assets/Images/buildings/city-4667143_1280.jpg';
const projectDetails = {
  1: {
    title: 'Project 1',
    images: [
      img1,
      img2,
      img3,
      img4,
    ],
    description: 'This is a detailed description of Project 1.',
  },
  2: {
    title: 'Project 2',
    images: [
        img1,
        img2,
        img3,
        img4,
    ],
    description: 'This is a detailed description of Project 2.',
  },
  3: {
    title: 'Project 2',
    images: [
        img1,
        img2,
        img3,
        img4,
    ],
    description: 'This is a detailed description of Project 2.',
  },
  4: {
    title: 'Project 2',
    images: [
        img1,
        img2,
        img3,
        img4,
    ],
    description: 'This is a detailed description of Project 2.',
  },
  5: {
    title: 'Project 2',
    images: [
      img1,
      img2,
      img3,
      img4,
    ],
    description: 'This is a detailed description of Project 2.',
  },
  6: {
    title: 'Project 2',
    images: [
      img1,
      img2,
      img3,
      img4,
    ],
    description: 'This is a detailed description of Project 2.',
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <div className="images-gallery">
        {project.images.map((image, index) => (
          <img src={image} alt={`Project ${id} pic ${index + 1}`} key={index} className="detail-image" />
        ))}
      </div>
      <p className="description">{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
