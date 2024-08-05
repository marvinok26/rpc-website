import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import { CgArrowTopRight } from "react-icons/cg";

import image1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import image2 from '../Assets/Images/buildings/building-8373615_1280.jpg';
import image3 from '../Assets/Images/buildings/buildings-7848348_1280.jpg';
import image4 from '../Assets/Images/buildings/city-4667143_1280.jpg';
import image5 from '../Assets/Images/buildings/city-5156636_1280.jpg';

const carouselData = [
  {
    imgSrc: image1,
    company: 'Real Plan Consultants Ltd.',
    title: 'Transform Spaces: Crafting Sustainable Futures Together',
    description: 'We design and plan providing unique adaptive solutions in different regions. Our footprint is evident from the coastal sandy beaches, to the lush green highlands of Mount Kenya, the scenic views of Rift Valley, the lagoons of Northern Kenya and the bustling streets of Central Nairobi.',
  },
  {
    imgSrc: image2,
    company: 'Real Plan Consultants Ltd.',
    title: 'Innovative Planning for a Sustainable Future',
    description: 'Real Plan Consultants Ltd is one of the leading physical & land use planning and environmental consultancy companies in Kenya.',
  },
  {
    imgSrc: image3,
    company: 'Real Plan Consultants Ltd.',
    title: 'Shaping Kenya\'s Landscapes: 20 Years of Excellence',
    description: 'Founded in 2003, we have been offering consultancy services for more than 20 years.',
  },
  {
    imgSrc: image4,
    company: 'Real Plan Consultants Ltd.',
    title: 'From Coastlines to Highlands: Transforming Spaces',
    description: 'Over the years, we have developed a strong network that is able to handle diverse assignments across the country.',
  },
  {
    imgSrc: image5,
    company: 'Real Plan Consultants Ltd.',
    title: 'Expert Solutions for Every Environment in Kenya',
    description: 'We seek to create a platform for best practices, sustainable and attractive environments in land use planning and environmental consultancy.',
  },
];

const Home = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    function showSlider(type) {
      let sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        showSlider('next');
      }, timeAutoNext);
    }

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <>
      {/* carousel */}
      <div className="carousel" ref={carouselRef}>
        {/* list item */}
        <div className="list" ref={sliderRef}>
          {carouselData.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
              <div className="content">
                <div className="company">{item.company}</div>
                <div className="title">{item.title}</div>
                <div className="des">{item.description}</div>
                <div className="buttons">
                  <button>Start Consultation
                    <CgArrowTopRight className='cons-icon'/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* time running */}
        <div className="time" ref={timeRef}></div>
      </div>

      {/* Mission and Values Section */}
      <div className="mission-values">
        <h2 className="section-title">Our Mission and Values</h2>
        <p className="section-paragraph">RPC has been providing services to a variety of clientele which include governments, private sector, corporations, real estate developers, institutions and individuals. We have a team of qualified staff who poses different specialised skill sets that enable us undertake various assignments. Key personnel include urban and regional planners, urban designers, environmental consultants, GIS & CAD experts, cartographers and support staff. All these are professionally qualified and registered by their respective professions.</p>
        <div className="mission-values-content">
          <div className="mission-image">
            <img src={image1} alt="Mission" />
          </div>
          <div className="mission-details">
            <div className="mission-item">
              <h3>Vision</h3>
              <p>To be a leader in the provision of physical & land use planning and environment consultancy services in the region.</p>
            </div>
            <div className="mission-item">
              <h3>Mission</h3>
              <p>To provide leadership in private practice in the provision of physical planning and environment consultancy.</p>
            </div>
            <div className="mission-item">
              <h3>Team Spirit</h3>
              <p>Striving towards Planned and Sustainable Environments.</p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="core-values">
          <h2 className="core-values-title">Core Values</h2>
          <div className="core-values-content">
            <div className="core-value">INTEGRITY</div>
            <div className="core-value">LEADERSHIP</div>
            <div className="core-value">SUSTAINABILITY</div>
            <div className="core-value">TEAM WORK</div>
            <div className="core-value">PROFESSIONALISM</div>
          </div>
          <div className="core-values-button">
            <button>See More 
              <CgArrowTopRight className='cons-icon'/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
