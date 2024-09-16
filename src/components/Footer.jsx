import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../Assets/Images/Logo/RPC_LTD_LOGO-removebg-preview.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-between bg-[length:64px_128px] bg-[#4263a5] bg-[linear-gradient(135deg,#4263a5_21px,#6190ec_22px,#d9ecff2d_24px,transparent_24px,transparent_67px,#d9ecff2d_67px,#d9ecff2d_69px,transparent_69px),linear-gradient(225deg,#4263a5_21px,#d9ecff2d_22px,#d9ecff2d_4px,transparent_24px,transparent_67px,#d9ecff2d_67px,#d9ecff2d_69px,transparent_9px)_0_64px] w-screen p-0 left-0">
      <div className="absolute left-0 top-[100px] h-[1px] w-full bg-white"></div>
      <div className="content w-full max-w-[1200px] mx-auto p-[20px_40px_20px] box-border">
        <div className="top flex items-center justify-between">
          <div className="logo-details text-white text-[30px]">
            <Link to="/" className="logo-container flex flex-col items-center">
              <img src={logo} alt="Logo" className="logo mt-[-20px] h-[60px] w-[65px]" />
              <h5 className="logo-text text-[14px] text-white">Real Plan Consultants Ltd</h5>
            </Link>
          </div>
          <div className="media-icons flex flex-[1] justify-end items-center ">
            <a href="www.facebook.com" aria-label="Facebook" className="flex h-[30px] w-[30px] ml-5 rounded-[50%] items-center justify-center text-white text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#335a8d] to-[#1c2e5a] bg-[#4267b2]">
              <FaFacebookF />
            </a>
            <a href="www.twitter.com" aria-label="Twitter" className="flex h-[30px] w-[30px] ml-5 rounded-[50%] items-center justify-center text-white text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#0f7cba] to-[#0a4c7b] bg-[#1da1f2]">
              <FaTwitter />
            </a>
            <a href="www.instagram.com" aria-label="Instagram" className="flex h-[30px] w-[30px] ml-5 rounded-[50%] items-center justify-center text-white text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#b9275b] to-[#8e1e45] bg-[#e1306c]">
              <FaInstagram />
            </a>
            <a href="www.linkedin.com" aria-label="LinkedIn" className="flex h-[30px] w-[30px] ml-5 rounded-[50%] items-center justify-center text-white text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#005a8d] to-[#003c6c] bg-[#0077b5]">
              <FaLinkedinIn />
            </a>
            <a href="www.youtube.com" aria-label="YouTube" className="flex h-[30px] w-[30px] ml-5 rounded-[50%] items-center justify-center text-white text-[17px] transition-all duration-400 ease-linear hover:bg-gradient-to-br from-[#cc0000] to-[#990000] bg-[#ff0000]">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="link-boxes flex justify-between pt-[20px]">
          <ul className="box w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[18px] font-[400] mb-[10px] relative">Company</li>
            <li><a href="/" className="text-white text-[14px] font-[600]">Home</a></li>
            <li><a href="/services" className="text-white text-[14px] font-[600]">Our Services</a></li>
            <li><a href="/about" className="text-white text-[14px] font-[600]">About us</a></li>
            <li><a href="/projects" className="text-white text-[14px] font-[600]">Projects</a></li>
          </ul>
          <ul className="box w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[18px] font-[400] mb-[10px] relative">Services</li>
            <li><a href="/services" className="text-white text-[14px] font-[600]">GIS & Mapping</a></li>
            <li><a href="/services" className="text-white text-[14px] font-[600]">Physical & Land use Planning</a></li>
            <li><a href="/services" className="text-white text-[14px] font-[600]">Development Applications</a></li>
            <li><a href="/services" className="text-white text-[14px] font-[600]">Environmental Services</a></li>
          </ul>
          <ul className="box w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[18px] font-[400] mb-[10px] relative">Opening Hours</li>
            <li className="text-white text-[14px] font-[600]">Monday to Friday</li>
            <li className="text-white text-[14px] font-[600]">8.00 am to 5.00 pm</li>
          </ul>
          <ul className="box w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[18px] font-[400] mb-[10px] relative">Contact us</li>
            <li className="text-white text-[14px] font-[600]">020-2214116</li>
            <li className="text-white text-[14px] font-[600]">0722477500</li>
            <li className="text-white text-[14px] font-[600]">info@realplan.co.ke</li>
          </ul>
          <ul className="box input-box w-[calc(100%/4-10px)] mb-[20px]">
            <li className="link_name text-white text-[18px] font-[400] mb-[10px] relative">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" className="h-[40px] w-full border-[2px] border-[#afafb6] bg-white rounded-[4px] px-[15px] text-[15px] text-black mt-[5px]" /></li>
            <li><input type="button" value="Subscribe" className="w-full bg-white text-black font-[500] text-[18px] mt-[4px] cursor-pointer transition-opacity duration-400 hover:opacity-100" /></li>
          </ul>
        </div>
      </div>

      <div className="bottom-details w-full bg-[#4263a5]">
        <div className="bottom_text max-w-[1200px] mx-auto p-[20px_40px] flex justify-between">
          <span className="text-[14px] font-[300] text-white opacity-80">Copyright © 2024 <a href="/" className="mr-[10px]">arvia_codes</a> All rights reserved</span>
          <span className="policy_terms text-[14px] font-[300] text-white opacity-80">
            <a href="/" className="mr-[10px] hover:opacity-100">Privacy policy</a>
            <a href="/" className="hover:opacity-100">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
