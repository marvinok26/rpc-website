import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <Link to="/" className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
              <h5 className='logo-text'>Real Plan Consultants Ltd</h5>
            </Link>
          </div>
          <div className="media-icons">
            <a href="www.facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="www.twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="www.instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="www.linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="www.youtube.com" aria-label="YouTube"><FaYoutube /></a>
          </div>
          </div>
          <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Company</li>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li><a href="/services">GIS & Mapping</a></li>
            <li><a href="/services">Physical & Land use Planning</a></li>
            <li><a href="/services">Development Applications</a></li>
            <li><a href="/services">Environmental Services</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Opening Hours</li>
            <li>Monday to Friday</li>
            <li> 8.00 am to 5.00 pm</li>
          </ul>
          <ul className="box">
            <li className="link_name">Contact us</li>
            <li>020-2214116</li>
            <li>0722477500</li>
            <li>info@realplan.co.ke</li>
            
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" /></li>
            <li><input type="button" value="Subscribe" /></li>
          </ul>
        </div>
      
        </div>
        <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2024 <a href="/">arvia_codes</a> All rights reserved
          </span>
          <span className="policy_terms">
            <a href="/">Privacy policy</a>
            <a href="/">Terms & condition</a>
          </span>
        </div>
        </div>
      
    </footer>
  );
};

export default Footer;


