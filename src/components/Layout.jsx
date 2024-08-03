import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
