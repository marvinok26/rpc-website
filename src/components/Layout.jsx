import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <NavBar />
      <main className="flex-grow" role="main">
        <Outlet />
      </main>
      <Footer />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Real Plan Consultants",
            "url": "https://www.realplanconsultants.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.realplanconsultants.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
    </div>
  );
};

export default Layout;