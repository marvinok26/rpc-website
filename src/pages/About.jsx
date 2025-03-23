import React from 'react';
import ImageRow from '../components/Images';
import image1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import { GiConfirmed } from 'react-icons/gi';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Real Plan Consultants</title>
        <meta name="description" content="Learn about Real Plan Consultants Ltd, a leading force in land use and environmental consultancy in Kenya since 2003." />
      </Helmet>

      <div className="w-full">
        <ImageRow />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl text-primary-600 mb-10 text-center font-bold">ABOUT US</h1>
        
        {/* Main content - Image and text with same height */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">
          {/* Content section with exact height to match image */}
          <div className="md:w-1/2 text-left flex flex-col h-[380px] overflow-y-auto">
            <div className="mb-auto">
              <h2 className="text-xl md:text-2xl mb-2 font-semibold text-neutral-800">IDEAS TO PLANS</h2>
              <h3 className="text-lg md:text-xl mb-4 text-primary-600">Transforming Visions into Sustainable Solutions</h3>
              <p className="text-sm md:text-base mb-6 text-neutral-600">
                Real Plan Consultants Ltd has been a leading force in land use and environmental consultancy in Kenya since 2003. With a team of certified experts, we deliver sustainable solutions for diverse clients, including governments and developers. Our collaboration with architects and engineers ensures comprehensive and innovative project outcomes.
              </p>
              
              <h3 className="text-lg md:text-xl mb-4 font-semibold text-neutral-800">CORE VALUES</h3>
              <ul className="space-y-2">
                {['Integrity', 'Leadership', 'Sustainability', 'Team Work', 'Professionalism'].map((value, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base text-neutral-600">
                    <GiConfirmed className="mr-2 text-primary-600 flex-shrink-0" /> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image with fixed height to match content */}
          <div className="md:w-1/2">
            <div className="h-[380px] overflow-hidden rounded-lg shadow-md">
              <img
                src={image1}
                alt="Building representation of our consultancy work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Team Spirit Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 bg-white p-8 rounded-lg shadow-md">
          {[
            { title: "Our Mission", text: "To be a leader in the provision of physical & land use planning and environment consultancy services in the region." },
            { title: "Our Vision", text: "To provide leadership in private practice in the provision of physical planning and environment consultancy." },
            { title: "Team Spirit", text: "Striving towards Planned and Sustainable Environments." },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-neutral-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl mb-4 font-semibold text-primary-600">{item.title}</h2>
              <p className="text-base text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visit clients */}
      <div className="bg-gradient-to-r from-primary-600/10 to-white py-12 px-4 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <TbWorld className="w-12 md:w-16 h-auto text-primary-600" />
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl text-primary-600 font-bold">Check Out Our Clients</h2>
              <h3 className="text-sm md:text-base text-neutral-600">We make sure to satisfy all our clients</h3>
            </div>
          </div>
          <div>
            <Link 
              to="/clients" 
              className="py-3 px-6 text-white bg-primary-600 rounded hover:bg-primary-700 transition-colors inline-block font-medium"
            >
              Check All Clients
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Real Plan Consultants Ltd",
            "url": "https://www.realplanconsultants.com",
            "logo": "https://www.realplanconsultants.com/logo.png",
            "description": "Leading land use and environmental consultancy in Kenya since 2003.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            },
            "sameAs": [
              "https://www.facebook.com/RealPlanConsultants",
              "https://www.linkedin.com/company/realplanconsultants"
            ]
          }
        `}
      </script>
    </>
  );
}

export default About;