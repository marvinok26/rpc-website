import React from 'react';
import { Link } from 'react-router-dom';
import { projectDetails } from '../data/projectDetailData';
import { Helmet } from 'react-helmet';

const ProjectDetail = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Real Plan Consultants</title>
        <meta name="description" content="Explore various projects by Real Plan Consultants including County Spatial Plans, ISUD Plans, Master Plans, and Urban Renewal & Slum Upgrades." />
      </Helmet>

      <div className="project-detail-container mt-[8rem]">
        {Object.keys(projectDetails).map((projectId) => {
          const project = projectDetails[projectId];
          return (
            <div key={projectId} className="project-section mb-12">
              <h1 className="text-2xl sm:text-4xl sm:my-8 text-[#4263A5] text-center">{project.title}</h1>

              {/* Center images in the grid and apply fixed height and width */}
              <div className="flex flex-wrap justify-center gap-4 p-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative block no-underline group cursor-pointer">
                    <Link to={`/project/${projectId}/image/${index + 1}`}>
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-opacity duration-300 z-10">
                        <h2 className="text-white text-lg sm:text-xl transition-opacity duration-300">
                          {image.title}
                        </h2>
                      </div>
                      <img
                        src={image.src}
                        alt={image.title}
                        loading="lazy"
                        className="w-[400px] h-[400px] object-cover group-hover:brightness-75 transition-all duration-300"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectDetail;
