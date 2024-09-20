import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
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
            <a href="https://www.facebook.com" aria-label="Visit our Facebook page" className="flex h-[25px] w-[25px] rounded-[50%] items-center justify-center text-white text-[14px] md:text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#335a8d] to-[#1c2e5a] bg-[#4267b2]">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" aria-label="Visit our Twitter profile" className="flex h-[25px] w-[25px] rounded-[50%] items-center justify-center text-white text-[14px] md:text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#0f7cba] to-[#0a4c7b] bg-[#1da1f2]">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" aria-label="Visit our Instagram profile" className="flex h-[25px] w-[25px] rounded-[50%] items-center justify-center text-white text-[14px] md:text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#b9275b] to-[#8e1e45] bg-[#e1306c]">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" aria-label="Visit our LinkedIn page" className="flex h-[25px] w-[25px] rounded-[50%] items-center justify-center text-white text-[14px] md:text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#005a8d] to-[#003c6c] bg-[#0077b5]">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" aria-label="Visit our YouTube channel" className="flex h-[25px] w-[25px] rounded-[50%] items-center justify-center text-white text-[14px] md:text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#cc0000] to-[#990000] bg-[#ff0000]">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="link-boxes flex flex-col md:flex-row justify-between pt-[20px]">
          <ul className="box w-full md:w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[16px] md:text-[18px] font-[400] mb-[10px] relative">Company</li>
            <li><Link to="/" className="text-white text-[12px] md:text-[14px] font-[600]">Home</Link></li>
            <li><Link to="/services" className="text-white text-[12px] md:text-[14px] font-[600]">Our Services</Link></li>
            <li><Link to="/about" className="text-white text-[12px] md:text-[14px] font-[600]">About Us</Link></li>
            <li><Link to="/projects" className="text-white text-[12px] md:text-[14px] font-[600]">Projects</Link></li>
          </ul>
          <ul className="box w-full md:w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[16px] md:text-[18px] font-[400] mb-[10px] relative">Services</li>
            <li><Link to="/services" className="text-white text-[12px] md:text-[14px] font-[600]">GIS & Mapping</Link></li>
            <li><Link to="/services" className="text-white text-[12px] md:text-[14px] font-[600]">Physical & Land Use Planning</Link></li>
            <li><Link to="/services" className="text-white text-[12px] md:text-[14px] font-[600]">Development Applications</Link></li>
            <li><Link to="/services" className="text-white text-[12px] md:text-[14px] font-[600]">Environmental Services</Link></li>
          </ul>
          <ul className="box w-full md:w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[16px] md:text-[18px] font-[400] mb-[10px] relative">Opening Hours</li>
            <li className="text-white text-[12px] md:text-[14px] font-[600]">Monday to Friday</li>
            <li className="text-white text-[12px] md:text-[14px] font-[600]">8:00 AM to 5:00 PM</li>
          </ul>
          <ul className="box input-box w-full md:w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[16px] md:text-[18px] font-[400] mb-[10px] relative">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" className="h-[35px] w-full border-[2px] border-[#afafb6] bg-white rounded-[4px] px-[10px] text-[12px] md:text-[15px] text-black mt-[5px]" aria-label="Email input for subscription" /></li>
            <li><input type="button" value="Subscribe" className="w-full bg-white text-black font-[500] text-[16px] md:text-[18px] mt-[4px] cursor-pointer transition-opacity duration-400 hover:opacity-100" aria-label="Subscribe button" /></li>
          </ul>
        </div>
      </div>

      <div className="bottom-details w-full bg-[#4263a5]">
        <div className="bottom_text max-w-[1200px] mx-auto px-[20px] py-[10px] flex flex-col md:flex-row justify-between">
          <span className="text-[12px] md:text-[14px] font-[300] text-white opacity-80 mb-[10px] md:mb-0">Copyright © 2024 <a href="/" className="mr-[5px] md:mr-[10px] font-[500] text-white">Real Plan Consultants Ltd.</a>All rights reserved</span>
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
