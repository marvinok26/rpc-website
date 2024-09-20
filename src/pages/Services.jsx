import React from 'react';
import ImageRow from '../components/Images';
import { GiConfirmed } from "react-icons/gi";
import image1 from "../Assets/Images/buildings/landuse.PNG";
import image2 from "../Assets/Images/buildings/development.PNG";
import image3 from "../Assets/Images/buildings/gis.PNG";

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
      <ImageRow />
      <div className="services-section">
        <h2 className="text-2xl sm:text-4xl my-6 sm:my-8 text-[#4263A5] text-center">OUR SERVICES</h2>
        <div className="flex flex-col items-center px-4 sm:px-5 py-4 bg-[#f9f9f9] w-[100vw]">
          {serviceData.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center mb-5 w-full max-w-[1200px] sm:px-5 box-border">
              <img
                src={item.imageSrc}
                alt={`Service related to ${item.title}`}
                loading="lazy" // Lazy loading for better performance
                className="h-[300px] sm:h-[450px] w-full sm:w-[500px] object-cover mb-4 sm:mb-0 sm:mr-8 sm:ml-20 rounded-md"
              />
              <div className="flex flex-col sm:items-start text-center sm:text-left">
                <h3 className="text-lg sm:text-xl mb-2 text-[#333]">{item.title}</h3>
                <ul className="list-none pl-0 sm:pl-4">
                  {item.services.map((service, index) => (
                    <li key={index} className="mb-2 text-[#666] flex items-center">
                      <GiConfirmed className="mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

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
