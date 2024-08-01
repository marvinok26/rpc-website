import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
  
      <div className="subscribe-section">
        <h2>Subscribe to our emails</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      
      <div className="footer-content">
        <div className="footer-left">

          <Link to="/" className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h5 className='logo-text'>Real Plan Consultants Ltd</h5>
          </Link>

          <div className="location-details">
            <MdLocationOn className="icon" />
            <p>4th Avenue Towers, <br />
              Along 4th Ngong Avenue <br />
              Upper Hill, Nairobi</p>
          </div>
          <div className="social-media">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="X"><FaTwitter /></a>
            <a href="mailto:example@gmail.com" aria-label="Gmail"><FaGoogle /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://tiktok.com" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer-center">
          <div className="column">
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Services</h3>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="contact-info">
            <MdPhone className="icon" />
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-info">
            <MdEmail className="icon" />
            <p>info@example.com</p>
          </div>
          <div className="contact-info">
            <p>Opening Hours:</p>
            <p>Mon-Fri: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
