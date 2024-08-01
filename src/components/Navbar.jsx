import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/Navbar.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h5 className='logo-text'>Real Plan Consultants Ltd</h5>
      </Link>
      <div className="nav-links">
        <Link 
          to="/" 
          className={currentPath === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link 
            to="/about" 
            className={currentPath === '/about' ? 'active' : ''}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            About Us <span className="dropdown-icon"><MdKeyboardArrowRight /></span>
          </Link>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link 
                to="/clients" 
                className={currentPath === '/clients' ? 'active' : ''}
              >
                Clients
              </Link>
            </div>
          )}
        </div>
        <Link 
          to="/services" 
          className={currentPath === '/services' ? 'active' : ''}
        >
          Services
        </Link>
        <Link 
          to="/projects" 
          className={currentPath === '/projects' ? 'active' : ''}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className={currentPath === '/contact' ? 'active' : ''}
        >
          Contact
        </Link>
      </div>
      <button className="schedule-button">Schedule Consultation</button>
    </nav>
  );
};

export default Navbar;
