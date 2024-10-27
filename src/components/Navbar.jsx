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
      setIsNavShowing(!isMobile);
    };

    handleResize(); // Set the initial state

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeNavHandler = () => {
    if (isMobileView) {
      setIsNavShowing(false);
    }
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setDropdownOpen(false), 300);
    setDropdownTimeout(timeout);
  };

  // Navigation Links Data
  const navLinks = [
    { path: '/', label: 'Home' },
    {
      path: '/about',
      label: 'About Us',
      hasDropdown: true,
      dropdownItems: [
        { path: '/clients', label: 'Our Clients' }
      ]
    },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-1 sm:p-10 bg-white h-[60px]">
      <Link to="/" className="flex flex-col items-center" onClick={closeNavHandler}>
        <img src={logo} alt="Logo" className="h-[50px] w-[60px]" />
        <h5 className="text-[12px] text-black">Real Plan Consultants Ltd</h5>
      </Link>

      {isNavShowing && (
        <ul className="flex-grow flex justify-center gap-9 list-none">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={link.hasDropdown ? handleMouseEnter : null}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : null}
            >
              <li>
                <Link
                  to={link.path}
                  className={`${currentPath === link.path ? 'text-[#e3364d]' : 'text-black'} text-[15px] font-bold flex items-center hover:text-gray-400`}
                  onClick={closeNavHandler}
                  aria-expanded={link.hasDropdown ? isDropdownOpen : undefined}
                  aria-haspopup={link.hasDropdown ? 'true' : undefined}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <span className="ml-1 transition-transform duration-300 text-[15px] font-bold">
                      <MdKeyboardArrowRight className={`${isDropdownOpen ? 'rotate-90' : ''}`} />
                    </span>
                  )}
                </Link>
              </li>
              {link.hasDropdown && isDropdownOpen && (
                <div className="absolute left-0 -ml-[10px] -mt-2 text-black p-2 rounded-md z-[1000]">
                  {link.dropdownItems.map((dropdownItem, i) => (
                    <li key={i}>
                      <Link
                        to={dropdownItem.path}
                        className={`${currentPath === dropdownItem.path ? 'text-[#e3364d]' : 'text-black'} text-[15px] font-bold hover:text-gray-400 text-nowrap`}
                        onClick={closeNavHandler}
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      )}

      {isMobileView && (
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
