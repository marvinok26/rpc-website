import React from 'react';
import { Link } from 'react-router-dom';
import { projectDetails } from '../data/projectDetailData';
import { Helmet } from 'react-helmet';
import { FaUser, FaClock, FaFolder, FaClipboard } from 'react-icons/fa';

const ProjectDetail = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Real Plan Consultants</title>
        <meta
          name="description"
          content="Explore various projects by Real Plan Consultants including County Spatial Plans, ISUD Plans, Master Plans, and Urban Renewal & Slum Upgrades."
        />
      </Helmet>

      <div className="project-detail-container mt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {Object.keys(projectDetails).map((projectId, index) => {
          const project = projectDetails[projectId];
          const isRightColumn = index % 2 !== 0;
          const customStyle = isRightColumn && index > 1 ? 'mt-[-2rem]' : '';

          const projectInfoItems = [
            { label: 'Client', value: project.client, icon: <FaUser className="text-blue-500 mr-2" />, description: "Primary organization overseeing the project" },
            { label: 'Period', value: project.period, icon: <FaClock className="text-green-500 mr-2" />, description: "Expected timeframe for completion" },
            { label: 'Assignment', value: project.assignment, icon: <FaFolder className="text-purple-500 mr-2" />, description: "Project scope and responsibilities" },
            { label: 'Status', value: project.status, icon: <FaClipboard className="text-red-500 mr-2" />, description: "Current progress of the project" },
          ];

          return (
            <div
              key={projectId}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${isRightColumn ? 'h-[650px]' : 'h-[680px]'} ${customStyle}`}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.images[0].src}
                  alt={project.title}
                  className="w-full h-[300px] object-contain"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-1 rounded">
                  {project.title.toUpperCase()}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                
                <p className="text-gray-700 mb-6">
                  {project.description || "This is a demo description for the project category."}
                </p>

                {/* Info Icons with Descriptions */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {projectInfoItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center">
                        {item.icon}
                        <span className="text-gray-700">{item.label}: </span>
                      </div>
                      <span className="text-gray-400 ml-6">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* More Info Button */}
                <Link
                  to={`/project/${projectId}`}
                  className="inline-block bg-purple-700 text-white text-center py-2 px-4 hover:bg-purple-600 transition-colors"
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
