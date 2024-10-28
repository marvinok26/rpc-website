// src/components/Clients.js

import React from 'react';
import CategorySection from './CategorySection';
import ImageRow from '../components/Images';
import { categories } from '../data/clients-data';

const Clients = () => {
  return (
    <>
      <ImageRow />


      <h1 className="text-3xl mt-8 mx-8 text-blue-700 text-center sm:text-2xl sm:mt-6 sm:mx-4">OUR CLIENTS</h1>
      <div className="p-5 sm:p-3">
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            images={category.images}
          />
        ))}

      </div>

      <div class="bg-gray-100 px-4 py-12 font-sans">
      <div class="max-w-4xl max-sm:max-w-sm mx-auto">
        <h2 class="text-gray-800 text-4xl max-sm:text-2xl font-extrabold mb-8">Application Metrics</h2>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div class="bg-white rounded-xl border px-7 py-8">
            <p class="text-gray-400 text-base font-semibold mb-1">Total free services</p>
            <h3 class="text-blue-600 text-3xl font-extrabold">5.4M+</h3>
          </div>
          <div class="bg-white rounded-xl border px-7 py-8">
            <p class="text-gray-400 text-base font-semibold mb-1">Revenue a month</p>
            <h3 class="text-blue-600 text-3xl font-extrabold">$80K</h3>
          </div>
          <div class="bg-white rounded-xl border px-7 py-8">
            <p class="text-gray-400 text-base font-semibold mb-1">Engagement</p>
            <h3 class="text-blue-600 text-3xl font-extrabold">100K</h3>
          </div>
          <div class="bg-white rounded-xl border px-7 py-8">
            <p class="text-gray-400 text-base font-semibold mb-1">Server Uptime</p>
            <h3 class="text-blue-600 text-3xl font-extrabold">99.9%</h3>
          </div>
        </div>
      </div>
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
