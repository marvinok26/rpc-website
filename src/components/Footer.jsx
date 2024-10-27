import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Social Media Links Data
  const socialLinks = [
    { href: 'https://www.facebook.com', icon: <FaFacebookF />, bg: 'bg-[#4267b2]', gradientFrom: '#335a8d', gradientTo: '#1c2e5a', label: 'Visit our Facebook page' },
    { href: 'https://www.twitter.com', icon: <FaTwitter />, bg: 'bg-[#1da1f2]', gradientFrom: '#0f7cba', gradientTo: '#0a4c7b', label: 'Visit our Twitter profile' },
    { href: 'https://www.instagram.com', icon: <FaInstagram />, bg: 'bg-[#e1306c]', gradientFrom: '#b9275b', gradientTo: '#8e1e45', label: 'Visit our Instagram profile' },
    { href: 'https://www.linkedin.com', icon: <FaLinkedinIn />, bg: 'bg-[#0077b5]', gradientFrom: '#005a8d', gradientTo: '#003c6c', label: 'Visit our LinkedIn page' },
    { href: 'https://www.youtube.com', icon: <FaYoutube />, bg: 'bg-[#ff0000]', gradientFrom: '#cc0000', gradientTo: '#990000', label: 'Visit our YouTube channel' },
  ];

  // Footer Links Data
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Our Services' },
        { to: '/about', label: 'About Us' },
        { to: '/projects', label: 'Projects' },
      ],
    },
    {
      title: 'Services',
      links: [
        { to: '/services', label: 'GIS & Mapping' },
        { to: '/services', label: 'Physical & Land Use Planning' },
        { to: '/services', label: 'Development Applications' },
        { to: '/services', label: 'Environmental Services' },
      ],
    },
    {
      title: 'Opening Hours',
      links: [
        { label: 'Monday to Friday' },
        { label: '8:00 AM to 5:00 PM' },
      ],
    },
    {
      title: 'Subscribe',
      input: true,
    },
  ];

  return (
    <footer className="relative flex flex-col bg-[#4263a5] bg-[linear-gradient(135deg,#4263a5_21px,#6190ec_22px,#d9ecff2d_24px,transparent_24px,transparent_67px,#d9ecff2d_67px,#d9ecff2d_69px,transparent_69px),linear-gradient(225deg,#4263a5_21px,#d9ecff2d_22px,#d9ecff2d_4px,transparent_24px,transparent_67px,#d9ecff2d_67px,#d9ecff2d_69px,transparent_9px)_0_64px] w-screen p-0 left-0">
      <div className="absolute left-0 top-[100px] h-[1px] w-full bg-white"></div>
      <div className="content w-full max-w-[1200px] mx-auto px-[20px] py-[20px] box-border">
        <div className="top flex flex-col md:flex-row items-center justify-between">
          <div className="logo-details text-white text-[24px] md:text-[30px] mb-[20px] md:mb-0">
            <Link to="/" className="logo-container flex flex-col items-center">
              <img src={logo} alt="Real Plan Consultants Ltd Logo" className="logo mt-[-20px] h-[50px] md:h-[60px] w-[55px] md:w-[65px]" />
              <h5 className="logo-text text-[12px] md:text-[14px] text-white">Real Plan Consultants Ltd</h5>
            </Link>
          </div>
          <div className="media-icons flex flex-wrap gap-[10px] justify-center md:justify-end items-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className={`flex h-[25px] w-[25px] rounded-[50%] items-center justify-center text-white text-[14px] md:text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[${link.gradientFrom}] to-[${link.gradientTo}] ${link.bg}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="link-boxes flex flex-col md:flex-row justify-between pt-[20px]">
          {footerLinks.map((section, index) => (
            <ul key={index} className="box w-full md:w-[calc(100%/4-10px)] mb-[20px]">
              <li className="link_name text-white text-[16px] md:text-[18px] font-[400] mb-[10px] relative">{section.title}</li>
              {section.links && section.links.map((link, i) => (
                <li key={i}>
                  {link.to ? (
                    <Link to={link.to} className="text-white text-[12px] md:text-[14px] font-[600]">
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-white text-[12px] md:text-[14px] font-[600]">{link.label}</span>
                  )}
                </li>
              ))}
              {section.input && (
                <>
                  <li>
                    <input type="text" placeholder="Enter your email" className="h-[35px] w-full border-[2px] border-[#afafb6] bg-white rounded-[4px] px-[10px] text-[12px] md:text-[15px] text-black mt-[5px]" aria-label="Email input for subscription" />
                  </li>
                  <li>
                    <input type="button" value="Subscribe" className="w-full bg-white text-black font-[500] text-[16px] md:text-[18px] mt-[4px] cursor-pointer transition-opacity duration-400 hover:opacity-100" aria-label="Subscribe button" />
                  </li>
                </>
              )}
            </ul>
          ))}
        </div>
      </div>

      <div className="bottom-details w-full bg-[#4263a5]">
        <div className="bottom_text max-w-[1200px] mx-auto px-[20px] py-[10px] flex flex-col md:flex-row justify-between">
          <span className="text-[12px] md:text-[14px] font-[300] text-white opacity-80 mb-[10px] md:mb-0">
            Copyright © 2024 <a href="/" className="mr-[5px] md:mr-[10px] font-[500] text-white">Real Plan Consultants Ltd.</a> All rights reserved
          </span>
          <span className="text-[12px] md:text-[14px] font-[300] text-white opacity-80">Designed & Developed by Avia</span>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Real Plan Consultants Ltd",
            "url": "https://www.realplanconsultants.com",
            "logo": "https://www.realplanconsultants.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/realplanconsultants",
              "https://www.twitter.com/realplanconsultants",
              "https://www.instagram.com/realplanconsultants",
              "https://www.linkedin.com/company/realplanconsultants",
              "https://www.youtube.com/channel/realplanconsultants"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+123456789",
              "contactType": "Customer Service",
              "availableLanguage": ["English"]
            }
          }
        `}
      </script>
    </footer>
  );
};

export default Footer;
