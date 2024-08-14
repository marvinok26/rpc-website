import React from 'react';

import ImageRow from '../components/Images';
import '../styles/Services.css';
import { GiConfirmed } from "react-icons/gi";

import image1 from "../Assets/Images/buildings/landuse.PNG"
import image2 from "../Assets/Images/buildings/development.PNG"
import image3 from "../Assets/Images/buildings/gis.PNG"

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
      'Integrated Strategic Urban Development Plans ',
      'Urban and Municipal Plans',
      'Urban Renewal Plans',
      'Master Plans ',
      'Slum Upgrading Programmes ',
      'Subject Plans ',
      'Street and physical address systems',
      'Planning and Development Studies and Related research'
    ],
    sublist: null,
  },
  {
    id: 2,
    imageSrc: image2,
    title: 'DEVELOPMENT SERVICES',
    services: [
      'Project feasibility studies and business case',
      'Renewal & Extensions of Lease',
      'Change & extension of Use',
      'Master plans ',
      'Amalgamation & Subdivision plans ',
      'Outdoor Advertisements'
    ],
    sublist: null,
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
    sublist: null,
  }
];

const Services = () => {
  return (
    <>
      <ImageRow />
      <div className="services-section">
        <h2 className="services-head">OUR SERVICES</h2>
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
