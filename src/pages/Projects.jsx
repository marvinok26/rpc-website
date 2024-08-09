import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

// Import images
import img1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import img2 from '../Assets/Images/buildings/building-8373615_1280.jpg';
import img3 from '../Assets/Images/buildings/buildings-7848348_1280.jpg';
import img4 from '../Assets/Images/buildings/city-4667143_1280.jpg';
import img5 from '../Assets/Images/buildings/city-5156636_1280.jpg';
import img6 from '../Assets/Images/buildings/crane-houses-7518536_1280.jpg';

const projects = [
  { id: 1, src: img1, title: 'Project 1' },
  { id: 2, src: img2, title: 'Project 2' },
  { id: 3, src: img3, title: 'Project 3' },
  { id: 4, src: img4, title: 'Project 4' },
  { id: 5, src: img5, title: 'Project 5' },
  { id: 6, src: img6, title: 'Project 6' },
];

const Projects = () => {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id} className="project-item">
          <img src={project.src} alt={project.title} className="project-image" />
          <div className="overlay">
            <div className="title">{project.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
