import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

const MoreInfo = () => {
  const { id } = useParams();
  const projectImages = projectData[id];
  
  // Format the project title for display
  const formattedTitle = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (!projectImages) return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h2 className="text-2xl text-primary-600 mb-4">Project Not Found</h2>
      <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
      <Link to="/projects" className="bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition-colors">
        Back to Projects
      </Link>
    </div>
  );

  return (
    <div className="project-details-container">
      {/* Hero Section with Overlay */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src={projectImages[0]?.src}
          alt={formattedTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 max-w-4xl">
            {formattedTitle}
          </h1>
          <div className="w-20 h-1 bg-primary-600 mb-6"></div>
          <p className="text-lg md:text-xl text-center max-w-2xl text-white/90">
            Explore our portfolio of {formattedTitle.toLowerCase()} projects
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow-md py-4 px-6 sticky top-[60px] z-30">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/projects" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl mb-10 text-primary-600 text-center font-bold">
          Project Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((image, index) => (
            <Link
              key={index}
              to={`/project/${id}/image/${index + 1}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title || `Project image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold">{image.title || `View Details`}</h3>
                    <FiExternalLink className="text-white text-xl" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
                  {image.title || `Project Image ${index + 1}`}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Information Section */}
      <div className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl mb-10 text-primary-600 text-center font-bold">
            About This Project Type
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            {id === "county-spatial-plan" && (
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-4">County Spatial Plans</h3>
                <p className="text-neutral-700 mb-4">
                  County Spatial Plans provide a comprehensive framework for land use, infrastructure, and resource management at the county level. 
                  These plans guide development decisions and ensure sustainable growth across urban and rural areas.
                </p>
                <p className="text-neutral-700">
                  Our team has extensive experience developing County Spatial Plans that balance economic growth, environmental conservation, 
                  and social equity considerations.
                </p>
              </div>
            )}
            
            {id === "isud-plans" && (
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-4">Integrated Strategic Urban Development Plans</h3>
                <p className="text-neutral-700 mb-4">
                  ISUD Plans take a holistic approach to urban development, integrating transportation, housing, economic activity, 
                  and public spaces into a cohesive vision for urban areas.
                </p>
                <p className="text-neutral-700">
                  Our ISUD Plans foster vibrant, sustainable urban environments that support economic prosperity while enhancing quality of life.
                </p>
              </div>
            )}
            
            {id === "master-plans" && (
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-4">Master Plans</h3>
                <p className="text-neutral-700 mb-4">
                  Master Plans provide detailed guidance for specific development projects, outlining land use, infrastructure, 
                  and design elements that create cohesive, functional spaces.
                </p>
                <p className="text-neutral-700">
                  Our Master Plans balance aesthetic considerations with practical needs, creating spaces that are both beautiful and functional.
                </p>
              </div>
            )}
            
            {id === "urban-renewal-slum-upgrades" && (
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-4">Urban Renewal & Slum Upgrades</h3>
                <p className="text-neutral-700 mb-4">
                  These projects focus on revitalizing existing urban areas and improving living conditions in informal settlements.
                  Our approach emphasizes community engagement and sustainable development principles.
                </p>
                <p className="text-neutral-700">
                  We work closely with communities and stakeholders to develop inclusive solutions that address both physical infrastructure
                  and social needs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;