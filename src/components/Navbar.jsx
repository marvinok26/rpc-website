import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

// import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  // Handle scroll event to change nav background opacity
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-1 sm:px-10 h-[60px] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <Link to="/" className="flex flex-col items-center" onClick={closeNavHandler}>
        {/* <img src={logo} alt="Logo" className="h-[50px] w-[60px]" /> */}
        <h5 className={`text-[12px] font-semibold ${scrolled ? 'text-neutral-800' : 'text-white'}`}>
          Real Plan Consultants Ltd
        </h5>
      </Link>

      {isNavShowing && (
        <ul className={`
          flex-grow flex justify-center gap-9 list-none
          ${isMobileView ? 'flex-col bg-white absolute top-[60px] left-0 w-full shadow-lg py-4 animate-slideIn' : ''}
        `}>
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
                  className={`
                    ${currentPath === link.path 
                      ? 'text-primary-600' 
                      : isMobileView || scrolled
                        ? 'text-neutral-800'
                        : 'text-white'
                    } 
                    text-[15px] font-bold flex items-center hover:text-primary-400 transition-colors
                    ${isMobileView ? 'py-3 px-6' : ''}
                  `}
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
                <div className={`
                  absolute left-0 -ml-[10px] mt-1 p-4 rounded-md z-[1000] shadow-md
                  ${scrolled ? 'bg-white/95 text-neutral-800' : 'bg-black/30 text-white'}
                  backdrop-blur-sm transition-all duration-300
                  ${isMobileView ? 'w-full bg-white/95 text-neutral-800' : 'min-w-[150px]'}
                `}>
                  {link.dropdownItems.map((dropdownItem, i) => (
                    <li key={i} className="list-none py-2">
                      <Link
                        to={dropdownItem.path}
                        className={`
                          ${currentPath === dropdownItem.path 
                            ? 'text-primary-600' 
                            : isMobileView || scrolled
                              ? 'text-neutral-800'
                              : 'text-white'
                          } 
                          text-[15px] font-bold hover:text-primary-400 whitespace-nowrap transition-colors
                        `}
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
        <button 
          className={`p-2 rounded transition-colors focus:outline-none ${
            scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setIsNavShowing(!isNavShowing)}
          aria-label={isNavShowing ? "Close navigation menu" : "Open navigation menu"}
        >
          {isNavShowing ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;