import React from 'react';
import CategorySection from './CategorySection';
import ImageRow from '../components/Images';
import { categories } from '../data/clients-data';
import { Helmet } from 'react-helmet';
import WhyChooseUs from '../components/WhyChooseUs';

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients | Real Plan Consultants</title>
        <meta name="description" content="Explore the clients of Real Plan Consultants, a leader in land use and environmental consultancy." />
        <meta name="keywords" content="clients, consultancy, land use, environmental services" />
      </Helmet>

      <div className="w-full">
        <ImageRow />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-10 text-primary-600 text-center font-bold">
          OUR CLIENTS
        </h1>
        
        <p className="text-neutral-700 max-w-4xl mx-auto text-center mb-12">
          Real Plan Consultants is proud to serve a diverse portfolio of clients from both the public and private sectors. 
          Our expertise in land use planning, environmental consultancy, and GIS services has helped these organizations 
          achieve their development objectives efficiently and sustainably.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              title={category.title}
              images={category.images}
              className={index === categories.length - 1 && categories.length % 2 !== 0 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}
            />
          ))}
        </div>
      </div>


      <WhyChooseUs />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Real Plan Consultants",
            "url": "https://www.realplanconsultants.com",
            "logo": "https://www.realplanconsultants.com/logo.png",
            "description": "A leader in land use and environmental consultancy, serving diverse clients.",
            "sameAs": [
              "https://www.facebook.com/RealPlanConsultants",
              "https://www.linkedin.com/company/realplanconsultants"
            ]
          }
        `}
      </script>
    </>
  );
};

export default Clients;