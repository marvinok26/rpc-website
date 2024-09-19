import React from 'react';
import { Link } from 'react-router-dom';
import ImageRow from '../components/Images';
import img1 from '../Assets/PROJECTS BATCH 1/COUNTY SPATIAL PLAN/DJI_0533.webp';
import img2 from '../Assets/PROJECTS BATCH 1/ISUD PLAN 3 NYERI TILE.webp';
import img3 from '../Assets/PROJECTS BATCH 1/MASTER PLAN 2 ALBIZZIA TILE.webp';
import img4 from '../Assets/PROJECTS BATCH 1/SLUM UPGRADE PLAN/Korogocho Land use Plan.webp';

const projects = [
  { slug: 'county-spatial-plan', src: img1, title: 'County Spatial Plan' },
  { slug: 'isud-plans', src: img2, title: 'ISUD Plans' },
  { slug: 'master-plans', src: img3, title: 'Master Plans' },
  { slug: 'urban-renewal-slum-upgrades', src: img4, title: 'Urban Renewal & Slum Upgrades Plans' },
];

const Projects = () => {
  return (
    <>
      <ImageRow />
      <h2 className="text-2xl sm:text-4xl my-6 sm:my-8 text-[#4263A5] text-center">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-5 m-16">
        {projects.map((project) => (
          <Link to={`/project/${project.slug}`} key={project.slug} className="relative block no-underline">
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-[500px] object-cover filter brightness-75 transition duration-300 ease-in-out md:w-[700px] lg:w-auto lg:h-[500px] sm:brightness-100 sm:hover:brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-100 sm:opacity-0 sm:hover:opacity-100 sm:transition-opacity sm:duration-300 sm:ease-in-out">
              <div className="text-xl text-center">{project.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;