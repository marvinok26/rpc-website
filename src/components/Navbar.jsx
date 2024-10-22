import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
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

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // Clear any scheduled closing
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Delay the dropdown closing by 300ms

    setDropdownTimeout(timeout);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-2.5 sm:p-10 bg-black/80  h-[85px]">
      <Link to="/" className="flex flex-col items-center" onClick={closeNavHandler}>
        <img src={logo} alt="Logo" className="h-[60px] w-[65px]" />
        <h5 className="text-[14px] text-white">Real Plan Consultants Ltd</h5>
      </Link>

      {isNavShowing && (
        <ul className="flex-grow flex justify-center gap-5 list-none">
          <li><Link
            to="/"
            className={`${currentPath === '/' ? 'text-[#e3364d]' : 'text-white'} font-bold flex items-center hover:text-gray-400`}
            onClick={closeNavHandler}
          >
            Home
          </Link></li>

          {/* Dropdown section */}
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <li>
              <Link
                to="/about"
                className={`${currentPath === '/about' ? 'text-[#e3364d]' : 'text-white'} font-bold flex items-center hover:text-gray-400`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={closeNavHandler}
              >
                About Us <span className="ml-1 transition-transform duration-300 text-[17px] font-bold"><MdKeyboardArrowRight className={`${isDropdownOpen ? 'rotate-90' : ''}`} /></span>
              </Link>
            </li>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-black/10 text-white p-2 rounded-md z-[1000]">
                <li><Link
                  to="/clients"
                  className={`${currentPath === '/clients' ? 'text-[#e3364d]' : 'text-white'} font-bold hover:text-gray-400`}
                  onClick={closeNavHandler}
                >
                  Clients
                </Link></li>
              </div>
            )}
          </div>

          <li><Link
            to="/services"
            className={`${currentPath === '/services' ? 'text-[#e3364d]' : 'text-white'} font-bold flex items-center hover:text-gray-400`}
            onClick={closeNavHandler}
          >
            Services
          </Link></li>
          <li><Link
            to="/projects"
            className={`${currentPath === '/projects' ? 'text-[#e3364d]' : 'text-white'} font-bold flex items-center hover:text-gray-400`}
            onClick={closeNavHandler}
          >
            Projects
          </Link></li>
          <li><Link
            to="/contact"
            className={`${currentPath === '/contact' ? 'text-[#e3364d]' : 'text-white'} font-bold flex items-center hover:text-gray-400`}
            onClick={closeNavHandler}
          >
            Contact
          </Link></li>
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
