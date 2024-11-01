// src/components/Clients.js

import React from 'react';
import CategorySection from './CategorySection';
import ImageRow from '../components/Images';
import { categories } from '../data/clients-data';

const Clients = () => {
  return (
    <>
      <ImageRow />

      <h1 className="text-3xl mt-8 mx-8 text-blue-700 text-center sm:text-2xl sm:mt-6 sm:mx-4">
        OUR CLIENTS
      </h1>
      <div className="p-5 sm:p-3 grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            images={category.images}
            className={index === categories.length - 1 ? 'lg:col-span-3 mx-auto' : ''}
          />
        ))}
      </div>

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
