import React from 'react';
import ImageRow from '../components/Images';
import { Helmet } from 'react-helmet';
import { FiMail, FiPhone, FiClock, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Real Plan Consultants</title>
        <meta name="description" content="Get in touch with Real Plan Consultants for your planning and GIS needs." />
      </Helmet>

      <div className="w-full">
        <ImageRow />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl mb-12 text-primary-600 text-center font-bold">CONTACT US</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Contact Information and Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary-600 border-b border-neutral-200 pb-3">Contact Details</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <FiClock className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Operation Hours:</p>
                  <p className="text-neutral-600">Monday to Friday between 8:00 AM to 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telephone Contacts:</p>
                  <p className="text-neutral-600">0722477500, 020-2214116</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMail className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <a href="mailto:info@realplan.co.ke" className="text-primary-600 hover:underline">info@realplan.co.ke</a>
                </div>
              </div>

              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location:</p>
                  <address className="text-neutral-600 not-italic">
                    4th Avenue Towers,<br />
                    Along 4th Ngong Avenue (off Bishop/Ngong road),<br />
                    Upper Hill, Nairobi<br />
                    (Suite 16.4, 16th Floor)
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-primary-600 border-b border-neutral-200 pb-3">Leave us a Message:</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full p-3 bg-white border border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Your Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full p-3 bg-white border border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message:</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    className="w-full p-3 bg-white border border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Map Section - Fixed height container */}
          <div className="md:w-1/2 flex flex-col">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 text-primary-600 border-b border-neutral-200 pb-3">Visit Us</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <iframe
                className="w-full h-[450px] rounded border border-neutral-200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=4th%20Avenue%20Towers,%20along%204th%20Ngong%20Avenue,%20Upper%20Hill,%20Nairobi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                title="Google Maps Location for Real Plan Consultants"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Real Plan Consultants Ltd",
              "url": "https://www.realplanconsultants.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "0722477500",
                "contactType": "customer service",
                "areaServed": "KE",
                "availableLanguage": "English"
              }
            }
          }
        `}
      </script>
    </>
  );
};

export default Contact;