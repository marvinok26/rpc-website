import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
// import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would handle the subscription here
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Social Media Links Data
  const socialLinks = [
    { href: 'https://www.facebook.com', icon: <FaFacebookF />, bg: 'bg-[#4267b2]', label: 'Visit our Facebook page' },
    { href: 'https://www.twitter.com', icon: <FaTwitter />, bg: 'bg-[#1da1f2]', label: 'Visit our Twitter profile' },
    { href: 'https://www.instagram.com', icon: <FaInstagram />, bg: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', label: 'Visit our Instagram profile' },
    { href: 'https://www.linkedin.com', icon: <FaLinkedinIn />, bg: 'bg-[#0077b5]', label: 'Visit our LinkedIn page' },
    { href: 'https://www.youtube.com', icon: <FaYoutube />, bg: 'bg-[#ff0000]', label: 'Visit our YouTube channel' },
  ];

  // Contact information
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: '4th Avenue Towers, 16th Floor, Upper Hill, Nairobi' },
    { icon: <FaPhone />, text: '0722477500, 020-2214116' },
    { icon: <FaEnvelope />, text: 'info@realplan.co.ke' },
  ];

  // Footer Links Data
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Our Services' },
        { to: '/about', label: 'About Us' },
        { to: '/projects', label: 'Projects' },
        { to: '/clients', label: 'Our Clients' },
        { to: '/contact', label: 'Contact Us' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { to: '/services', label: 'GIS & Mapping' },
        { to: '/services', label: 'Physical & Land Use Planning' },
        { to: '/services', label: 'Development Applications' },
        { to: '/services', label: 'Environmental Services' },
        { to: '/services', label: 'County Spatial Plans' },
        { to: '/services', label: 'Master Plans' },
      ],
    },
  ];

  return (
    <footer className="bg-primary-700 text-white pt-16 pb-0">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex flex-col items-start">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  {/* <img src={logo} alt="Real Plan Consultants Ltd Logo" className="h-12 w-auto" /> */}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Real Plan</h3>
                  <p className="text-xs text-white/80">Consultants Ltd</p>
                </div>
              </Link>
              <p className="text-sm text-white/80 mb-6">
                Providing expert GIS and planning consultancy services for sustainable urban 
                development since 2003.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div>
              <h4 className="text-sm font-bold uppercase mb-4 tracking-wider">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className={`
                      flex h-9 w-9 rounded-full items-center justify-center text-white text-base
                      transition-all duration-300 ease-in-out hover:scale-110 ${link.bg}
                    `}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-bold uppercase mb-4 tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.to} 
                      className="text-sm text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact & Subscribe */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 tracking-wider">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">{item.icon}</span>
                  <span className="text-sm text-white/80">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-sm font-bold uppercase mb-4 tracking-wider">Newsletter</h4>
            <p className="text-sm text-white/80 mb-3">Subscribe to receive updates on our latest projects and services.</p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full px-4 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 text-white"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-primary-600 hover:bg-primary-500 text-white px-3 py-1 rounded text-sm transition-colors duration-300"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-xs text-green-400 mt-2">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Opening Hours Bar */}
      <div className="bg-primary-600 py-4 mb-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold">Operating Hours</h4>
              <p className="text-xs text-white/80">Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          <Link to="/contact" className="px-6 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors duration-300 text-sm font-bold">
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Real Plan Consultants Ltd. All Rights Reserved.
          </p>
          <div className="text-sm text-white/70">
            Designed & Developed by <span className="text-white">Elixer</span>
          </div>
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
              "telephone": "0722477500",
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