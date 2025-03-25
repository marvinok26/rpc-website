import React, { useEffect, useState } from 'react';
import { CgArrowTopRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { carouselData, servicesData } from '../data/home-data'; // Import data
import image1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Auto slide every 8 seconds
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Real Plan Consultants | GIS and Planning Consultancy</title>
        <meta name="description" content="Expert GIS and planning consultancy services for sustainable urban development and environmental management." />
      </Helmet>

      {/* Hero Carousel - Full height including navbar space */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-600/30 z-30">
          <div 
            className="h-full bg-primary-600" 
            style={{ 
              width: `${((activeSlide + 1) / carouselData.length) * 100}%`,
              transition: 'width 8s linear' 
            }}
          ></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {carouselData.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            {/* Slide Image */}
            <img
              src={item.imgSrc}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover filter brightness-[80%]"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
            
            {/* Text Content */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full md:w-1/2 max-w-[600px] px-8 md:px-16 box-border text-white z-20">
              {/* Company Tag */}
              <div className="inline-flex items-center mb-4">
                <div className="h-[3px] w-10 bg-accent-600 mr-4"></div>
                <span className="text-sm md:text-base uppercase tracking-wider text-white/90">
                  {item.company}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 animate-fadeIn">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg mb-8 leading-relaxed text-white/90 max-w-[90%] animate-fadeIn">
                {item.description}
              </p>
              
              {/* Call to Action Button */}
              <div className="animate-fadeIn">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 group font-medium"
                >
                  Start Consultation
                  <CgArrowTopRight className="text-xl transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows (optional) */}
        <button 
          onClick={() => setActiveSlide(prev => (prev === 0 ? carouselData.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveSlide(prev => (prev === carouselData.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mission and Values Section */}
      <section className="relative py-16 text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${image1})` }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary-600 font-bold">Our Mission and Values</h2>
          
          <p className="mx-auto max-w-4xl mb-10 text-neutral-600">
            RPC has been providing services to a variety of clientele including governments, private sector, corporations, real estate developers, institutions, and individuals. We have a qualified team with various specialized skill sets, enabling us to undertake various assignments. Key personnel include urban and regional planners, urban designers, environmental consultants, GIS & CAD experts, and cartographers.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mx-auto max-w-5xl">
            {/* Image container with fixed height */}
            <div className="md:w-1/2">
              <div className="h-[380px] rounded-lg shadow-md overflow-hidden">
                <img 
                  src={image1} 
                  alt="Mission" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>
            
            {/* Text tabs with exact matching height */}
            <div className="md:w-1/2 text-left h-[380px] flex flex-col">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3 flex-1">
                <h3 className="text-xl mb-2 text-primary-600 text-center font-semibold">Vision</h3>
                <p className="text-neutral-600">To be a leader in the provision of physical & land use planning and environmental consultancy services in the region.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3 flex-1">
                <h3 className="text-xl mb-2 text-primary-600 text-center font-semibold">Mission</h3>
                <p className="text-neutral-600">To provide leadership in private practice in the provision of physical planning and environmental consultancy.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl mb-2 text-primary-600 text-center font-semibold">Team Spirit</h3>
                <p className="text-neutral-600">Striving towards Planned and Sustainable Environments.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-primary-600 font-bold">Core Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {["INTEGRITY", "LEADERSHIP", "SUSTAINABILITY", "EXCELLENCE", "INNOVATION"].map(value => (
                <div 
                  key={value} 
                  className="bg-primary-600 text-white p-2 rounded-sm text-l font-medium flex items-center justify-center h-14 hover:bg-primary-700 transition-colors transform hover:-translate-y-1 duration-300"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-10 text-primary-600 text-center font-bold">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div 
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full" 
                key={service.id}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-xs mb-3 text-primary-600 text-center font-semibold truncate whitespace-nowrap">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-xs mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <Link to="/services" className="mt-auto">
                    <button className="w-full bg-primary-600 text-white border-none rounded py-2 px-4 font-medium flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors">
                      Learn More
                      <CgArrowTopRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
};

export default Home;