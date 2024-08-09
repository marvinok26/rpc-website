import React, { useEffect, useRef, useState } from 'react';
import '../styles/Home.css';
import { CgArrowTopRight } from 'react-icons/cg';
import { carouselData, servicesData } from '../data/home-data'; // Import data
import { Link } from 'react-router-dom';

import image1 from '../Assets/Images/buildings/building-102840_1280.jpg';

const Home = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const timeRef = useRef(null);
  const countersRef = useRef([]);
  const [isInView, setIsInView] = useState(false);

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

  useEffect(() => {
    function updateCounters() {
      if (isInView) {
        countersRef.current.forEach((counter) => {
          function upDate() {
            const target = Number(counter.getAttribute('data-target'));
            const count = Number(counter.innerText);
            const speed = 97;
            const inc = target / speed;
            if (count < target) {
              counter.innerText = Math.floor(inc + count);
              setTimeout(upDate, 15);
            } else {
              counter.innerText = target;
            }
          }
          upDate();
        });
      }
    }

    updateCounters();
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const counterSection = document.querySelector('.counter-wrapper');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
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
                  <button>
                    Start Consultation
                    <CgArrowTopRight className='cons-icon' />
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
            <div className="core-value">EXCELLENCE</div>
            <div className="core-value">INNOVATION</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="our-services">
        <h2 className="services-title">Our Services</h2>
        <div className="services-content">
          {servicesData.map((service) => (
            <div className="service-item" key={service.id}>
              <img src={service.image} alt={service.title} className="service-image"/>
              <div className="service-details">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-button">
              <Link to="/services"><button> Learn More
                  <CgArrowTopRight className='cons-icon' />
                </button></Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
