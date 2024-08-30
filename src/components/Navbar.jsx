import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

import '../styles/Navbar.css';
import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 800;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsNavShowing(true);
      } else {
        setIsNavShowing(false); // Ensure menu is initially closed on mobile
      }
    };

    handleResize(); // Set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNavHandler = () => {
    if (isMobileView) {
      setIsNavShowing(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" onClick={closeNavHandler}>
        <img src={logo} alt="Logo" className="logo" />
        <h5 className="logo-text">Real Plan Consultants Ltd</h5>
      </Link>

      {isNavShowing && (
        <ul className="nav-links">
          <li><Link
            to="/"
            className={currentPath === '/' ? 'active' : ''}
            onClick={closeNavHandler}
          >
            Home
          </Link></li>
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <li><Link
              to="/about"
              className={currentPath === '/about' ? 'active' : ''}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              onClick={closeNavHandler}
            >
              About Us <span className="dropdown-icon"><MdKeyboardArrowRight /></span>
            </Link></li>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <li><Link
                  to="/clients"
                  className={currentPath === '/clients' ? 'active' : ''}
                  onClick={closeNavHandler}
                >
                  Clients
                </Link></li>
              </div>
            )}
          </div>
          <li><Link
            to="/services"
            className={currentPath === '/services' ? 'active' : ''}
            onClick={closeNavHandler}
          >
            Services
          </Link></li>
          <li><Link
            to="/projects"
            className={currentPath === '/projects' ? 'active' : ''}
            onClick={closeNavHandler}
          >
            Projects
          </Link></li>
          <li><Link
            to="/contact"
            className={currentPath === '/contact' ? 'active' : ''}
            onClick={closeNavHandler}
          >
            Contact
          </Link></li>
          {/* Render the schedule button only on desktop view */}
          {!isMobileView && (
            <button className="schedule-button">Schedule Consultation</button>
          )}
        </ul>
      )}

      {isMobileView && (
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
