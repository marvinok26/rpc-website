import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';
import { Helmet } from 'react-helmet';

const ProjectDetail = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Real Plan Consultants</title>
        <meta name="description" content="Explore various projects by Real Plan Consultants." />
      </Helmet>

      <div className="project-detail-container mt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {Object.keys(projectData).map((projectId, index) => {
          const project = projectData[projectId];
          const isRightColumn = index % 2 !== 0;

          return (
            <div
              key={projectId}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${isRightColumn ? 'h-[500px]' : 'h-[400px]'}`}
            >
              <div className="relative">
                <img src={project.images[0].src} alt={project.title} className="w-full h-[250px] object-cover" />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-1 rounded">
                  {project.title.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-6">{project.description}</p>

                <Link
                  to={`/project/${projectId}`}
                  className="inline-block bg-purple-700 text-white text-center py-2 px-4 rounded hover:bg-purple-600 transition-colors"
                >
                  More Info
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectDetail;
