import React, { useEffect, useRef, useState } from 'react';
import { CgArrowTopRight } from 'react-icons/cg';
import { carouselData, servicesData } from '../data/home-data'; // Import data
import { Link } from 'react-router-dom';
import image1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import '../styles/Home.css';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const timeRef = useRef(null);
  const countersRef = useRef([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;

    let timeRunning = 500; // Duration for animations (can be adjusted)
    let timeAutoNext = 10000; // Changed to 10 seconds for each item display

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
      <div className="carousel mt-20 relative w-screen h-[90vh] overflow-hidden" ref={carouselRef}>
        <div className="list absolute inset-0 flex" ref={sliderRef}>
          {carouselData.map((item, index) => (
            <div className="item absolute inset-0 w-full h-full" key={index}>
              <img
                src={item.imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover filter brightness-[70%]"
                loading="lazy" // Lazy load image
                decoding="async" // Improve load time
              />
              <div className="content absolute top-[30%] w-full md:w-[1000px] h-[400px] max-h-full left-4 pr-[10%] box-border text-white text-shadow-lg">

                <div className="company font-bold text-[10px] mb-4 md:text-[12px] leading-tight inline-flex gap-2 p-[2px_1px] md:p-[4px_2px] uppercase bg-[#00000079]">
                  {item.company.split(' ').map((word, index) => (
                    <span key={index}>{word}</span>
                  ))}
                </div>

                <div className="title text-[2em] md:text-[2.8em] font-black leading-[1.2em] md:leading-[1.3em] uppercase w-[88%] mb-4">{item.title}</div>

                <div className="des w-[80%] text-[0.8em] md:text-[1em] font-normal">{item.description}</div>
                <div className="buttons flex gap-[8px] md:gap-[10px] mt-[15px] md:mt-[20px]">
                  <button className="bg-[#4263A5] text-white border-none rounded-[4px] md:rounded-[5px] tracking-wide font-medium p-[8px_16px] md:p-[10px_20px] flex items-center gap-[8px] md:gap-[10px] cursor-pointer transition-colors duration-300 hover:bg-[#6190ec]">
                    Start Consultation
                    <CgArrowTopRight className='transition-transform duration-300 text-[15px] md:text-[17px] font-bold hover:rotate-[45deg]' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="time absolute z-[1000] h-[3px] bg-[#f1683a] left-0 top-0" ref={timeRef}></div>
      </div>

      <div className="relative w-screen py-[50px] text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image1})` }}>
  <div className="absolute inset-0 bg-white/90 z-1"></div>
  <h2 className="text-[2.5em] mb-[10px] text-[#4263A5] relative z-2 text-center">Our Mission and Values</h2>
  <p className="mx-auto max-w-[1000px] relative z-2 my-[20px] text-justify">
    RPC has been providing services to a variety of clientele including governments, private sector, corporations, real estate developers, institutions, and individuals. We have a qualified team with various specialized skill sets, enabling us to undertake various assignments. Key personnel include urban and regional planners, urban designers, environmental consultants, GIS & CAD experts, and cartographers.
  </p>
  <div className="flex flex-col md:flex-row gap-[30px] mx-auto max-w-[1000px] relative z-2">
    <div className="w-full md:max-w-[50%] rounded-[10px] overflow-hidden">
      <img src={image1} alt="Mission" className="w-full h-auto rounded-[10px]" loading="lazy" />
    </div>
    <div className="md:max-w-[50%] text-left">
      <div className="mb-[20px]">
        <h3 className="text-[1.2em] mb-[10px] text-[#4263A5] text-center">Vision</h3>
        <p className="text-[1em] text-justify break-words">To be a leader in the provision of physical & land use planning and environmental consultancy services in the region.</p>
      </div>
      <div className="mb-[20px]">
        <h3 className="text-[1.2em] mb-[10px] text-[#4263A5] text-center">Mission</h3>
        <p className="text-[1em] text-justify break-words">To provide leadership in private practice in the provision of physical planning and environmental consultancy.</p>
      </div>
      <div className="mb-[20px]">
        <h3 className="text-[1.2em] mb-[10px] text-[#4263A5] text-center">Team Spirit</h3>
        <p className="text-[1em] text-justify break-words">Striving towards Planned and Sustainable Environments.</p>
      </div>
    </div>
  </div>

  <div className="relative overflow-hidden z-2">
    <h2 className="text-[2.5em] mb-[10px] mt-3 text-[#4263A5] text-center">Core Values</h2>
    <div className="flex flex-col md:flex-row gap-[20px] animate-slideIn overflow-hidden m-5">
      {["INTEGRITY", "LEADERSHIP", "SUSTAINABILITY", "EXCELLENCE", "INNOVATION"].map(value => (
        <div key={value} className="bg-[#4263A5] text-white p-[15px] rounded-[5px] text-[1.2em] font-medium flex-1 text-center relative">{value}</div>
      ))}
    </div>
  </div>
</div>


<div className="py-10 text-center bg-gray-100 font-sans">
  <h2 className="text-4xl mb-5 text-blue-800">Our Services</h2>
  <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5 max-w-screen-xl mx-auto">
    {servicesData.map((service) => (
      <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center max-w-full md:max-w-[23%] box-border transition-transform duration-300 hover:translate-y-[-10px]" key={service.id}>
        <img src={service.image} alt={service.title} className="w-[250px] h-[200px] object-cover rounded-sm" loading="lazy" />
        <div className="flex flex-col flex-grow justify-between mt-4 text-center">
          <h3 className="text-xl mb-2 text-blue-800">{service.title}</h3>
          <p className="text-base mb-2 h-[80px] overflow-hidden">{service.description}</p> {/* Height restricts lines */}
          <div className="flex justify-center gap-2 mt-auto"> {/* Aligns button at the bottom */}
            <Link to="/services">
              <button className="bg-blue-800 text-white border-none rounded-sm px-2 py-2 text-sm font-medium cursor-pointer flex items-center gap-2 transition-colors duration-300 hover:bg-blue-900">
                Learn More
                <CgArrowTopRight className="transition-transform duration-300 text-sm font-bold" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<WhyChooseUs />

    </>
  );
};

export default Home;
