import React from 'react';

import ImageRow from '../components/Images';
import '../styles/Services.css';
import { GiConfirmed } from "react-icons/gi";

import image1 from "../Assets/Images/buildings/building-102840_1280.jpg"
import image2 from "../Assets/Images/buildings/crane-houses-7518536_1280.jpg"
import image3 from "../Assets/Images/buildings/skyscraper-8373617_1280.jpg"

// Data for services
const serviceData = [
  {
    id: 1,
    imageSrc: image1,
    title: 'PHYSICAL & LAND USE PLANNING',
    services: [
      'Site Analysis and Assessment',
      'Land Use Planning',
      'Zoning and Regulatory Compliance',
      'Environmental Impact Studies',
      'Urban and Regional Planning',
      'Strategic Development Plans',
      'Infrastructure Planning',
      'Master Planning'
    ],
    sublist: null,
  },
  {
    id: 2,
    imageSrc: image2,
    title: 'DEVELOPMENT SERVICES',
    services: [
      'Project Feasibility Studies',
      'Development Approvals',
      'Planning and Design Consultation',
      'Building Permits',
      'Development Proposals',
      'Construction Management'
    ],
    sublist: null,
  },
  {
    id: 3,
    imageSrc: image3,
    title: 'ENVIRONMENTAL SERVICES',
    services: [
      'Environmental Assessments',
      'Sustainability Consulting',
      'Waste Management Planning',
      'Environmental Compliance',
      'Pollution Control',
      'Biodiversity Conservation'
    ],
    sublist: null,
  }
];

const Services = () => {
  return (
    <>
      <ImageRow />
      <div className="services-section">
        <h2 className="services-head">Our Services</h2>
        <div className="services-contain">
          {serviceData.map((item) => (
            <div key={item.id} className="service-it">
              <img src={item.imageSrc} alt={item.title} className="service-im" />
              <div className="service-det">
                <h3 className="service-ti">{item.title}</h3>
                <ul className="service-li">
                  {item.services.map((service, index) => (
                    <li key={index} className="service"><GiConfirmed className="tick-icon"/>
                      {service}
                      {index === 5 && item.sublist && (
                        <ul className="sublist">
                          {item.sublist.map((subService, subIndex) => (
                            <li key={subIndex}>{subService}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
