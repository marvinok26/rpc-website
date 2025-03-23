import React from 'react';
import { Link } from 'react-router-dom';
import { projectDetails } from '../data/projectDetailData';
import { Helmet } from 'react-helmet';
import ImageRow from '../components/Images';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Real Plan Consultants</title>
        <meta name="description" content="Explore various projects by Real Plan Consultants including County Spatial Plans, ISUD Plans, Master Plans, and Urban Renewal & Slum Upgrades." />
      </Helmet>

      <div className="w-full">
        <ImageRow />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-12 text-primary-600 text-center font-bold">OUR PROJECTS</h1>
        
        <p className="text-center text-neutral-700 max-w-4xl mx-auto mb-16">
          Real Plan Consultants has successfully delivered a wide range of projects across Kenya, from comprehensive 
          County Spatial Plans to detailed Urban Renewal initiatives. Explore our portfolio to see how we're 
          transforming communities through expert planning and design.
        </p>

        {Object.keys(projectDetails).map((projectId, index) => {
          const project = projectDetails[projectId];
          return (
            <div key={projectId} className={`mb-20 ${index !== 0 ? 'pt-6' : ''}`}>
              <div className="flex items-center mb-8">
                <div className="h-1 bg-primary-600 flex-grow"></div>
                <h2 className="text-2xl md:text-3xl mx-6 text-primary-600 text-center font-bold whitespace-nowrap">{project.title}</h2>
                <div className="h-1 bg-primary-600 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {project.images.map((image, index) => (
                  <Link 
                    to={`/project/${projectId}/image/${index + 1}`}
                    key={index} 
                    className="group relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[320px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300 z-10"></div>
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {image.title}
                      </h3>
                      <div className="w-10 h-1 bg-primary-600 group-hover:w-20 transition-all duration-500"></div>
                      <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Click to view details
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
            </div>
          );
        })}
      </div>

      {/* Call To Action Section */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-6 font-bold">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you create sustainable, 
            innovative solutions for your planning and design needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-neutral-100 transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Projects Portfolio",
            "description": "Portfolio of planning and GIS projects by Real Plan Consultants",
            "publisher": {
              "@type": "Organization",
              "name": "Real Plan Consultants Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.realplanconsultants.com/logo.png"
              }
            }
          }
        `}
      </script>
    </>
  );
};

export default Projects;