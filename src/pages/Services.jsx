import React from 'react';
import ImageRow from '../components/Images';
import { GiConfirmed } from "react-icons/gi";
import { Helmet } from 'react-helmet';
import image1 from "../Assets/Images/buildings/img14.PNG";
import image2 from "../Assets/Images/buildings/img15.PNG";
import image3 from "../Assets/Images/buildings/img16.PNG";

// Data for services
const serviceData = [
  {
    id: 1,
    imageSrc: image1,
    title: 'PHYSICAL & LAND USE PLANNING',
    services: [
      'Policy Development',
      'Regional Physical and Land use Plans',
      'Inter-Regional Physical and Land use Plans',
      'County Spatial Plans',
      'Local Physical and Land Use development Plans',
      'Integrated Strategic Urban Development Plans',
      'Urban and Municipal Plans',
      'Urban Renewal Plans',
      'Master Plans',
      'Slum Upgrading Programmes',
      'Subject Plans',
      'Street and physical address systems',
      'Planning and Development Studies and Related research'
    ],
  },
  {
    id: 2,
    imageSrc: image2,
    title: 'DEVELOPMENT SERVICES',
    services: [
      'Project feasibility studies and business case',
      'Renewal & Extensions of Lease',
      'Change & extension of Use',
      'Master plans',
      'Amalgamation & Subdivision plans',
      'Outdoor Advertisements'
    ],
  },
  {
    id: 3,
    imageSrc: image3,
    title: 'ENVIRONMENTAL SERVICES',
    services: [
      'Strategic Environmental Assessment (SEA)',
      'Environmental Impact assessment (EIA)',
      'Environmental Audits (EA)',
      'Environmental related Studies and research',
      'Resettlement Action Plans (RAP)',
      'Electro Magnetic Field Testing and measurements'
    ],
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Real Plan Consultants</title>
        <meta name="description" content="Explore our comprehensive GIS, planning, and environmental consultancy services." />
      </Helmet>

      <div className="w-full">
        <ImageRow />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl mb-12 text-primary-600 text-center font-bold">OUR SERVICES</h2>
        
        <div className="space-y-16">
          {serviceData.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-stretch gap-10 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="md:w-1/2">
                <div className="h-[380px] overflow-hidden rounded-lg shadow-md border border-neutral-200">
                  <img
                    src={item.imageSrc}
                    alt={`Service related to ${item.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col justify-center pt-6 md:pt-0">
                <h3 className="text-2xl md:text-3xl mb-6 font-bold text-primary-600 text-center md:text-left">{item.title}</h3>
                <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="space-y-3">
                    {item.services.map((service, index) => (
                      <li key={index} className="flex items-start text-neutral-700 hover:text-neutral-900 transition-colors">
                        <GiConfirmed className="mt-1 mr-3 text-primary-600 text-lg flex-shrink-0" />
                        <span className="text-base font-medium">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional info section */}
      <section className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl mb-8 text-primary-600 text-center font-bold">WHY CLIENTS CHOOSE OUR SERVICES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <h4 className="text-xl font-semibold mb-4 text-primary-600">Expertise & Experience</h4>
              <p className="text-neutral-700">
                Our team of qualified professionals brings decades of combined experience in planning, 
                environmental assessment, and GIS mapping solutions, ensuring high-quality deliverables.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <h4 className="text-xl font-semibold mb-4 text-primary-600">Comprehensive Solutions</h4>
              <p className="text-neutral-700">
                From initial analysis to implementation, we provide end-to-end solutions tailored 
                to your specific requirements and challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <h4 className="text-xl font-semibold mb-4 text-primary-600">Innovation & Sustainability</h4>
              <p className="text-neutral-700">
                We integrate the latest methodologies and technologies to deliver sustainable, 
                future-proof solutions that meet both current needs and long-term objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4263a5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #354a7d;
        }
      `}</style>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Consultancy Services",
            "provider": {
              "@type": "Organization",
              "name": "Real Plan Consultants Ltd",
              "url": "https://www.realplanconsultants.com",
              "logo": "https://www.realplanconsultants.com/logo.png",
              "sameAs": "https://www.realplanconsultants.com"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Physical and Land Use Planning"
              },
              {
                "@type": "Offer",
                "name": "Development Services"
              },
              {
                "@type": "Offer",
                "name": "Environmental Services"
              }
            ]
          }
        `}
      </script>
    </>
  );
};

export default Services;