import React from 'react'

import ImageRow from '../components/Images'
import "../styles/About.css"

import image1 from "../Assets/Images/buildings/building-102840_1280.jpg"
import { GiConfirmed } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';


function About() {
  return (
    <>
      <ImageRow />
      <div className="about-container">
        <h1 className="about-heading">ABOUT US</h1>
        <div className="about-content">
          <div className="about-text">
            <div className="ideas-to-plans">
              <h2>IDEAS TO PLANS</h2>
              <h3>Transforming Visions into Sustainable Solutions</h3>
              <p>Real Plan Consultants Ltd has been a leading force in land use and environmental consultancy in Kenya since 2003. With a team of certified experts, we deliver sustainable solutions for diverse clients, including governments and developers. Our collaboration with architects and engineers ensures comprehensive and innovative project outcomes.</p>
              <h3>CORE VALUES</h3>
              <ul className="core-values">
                <li><span className="tick-icon"><GiConfirmed /></span> Integrity</li>
                <li><span className="tick-icon"><GiConfirmed /></span> Leadership</li>
                <li><span className="tick-icon"><GiConfirmed /></span> Sustainability</li>
                <li><span className="tick-icon"><GiConfirmed /></span> Team Work</li>
                <li><span className="tick-icon"><GiConfirmed /></span> Professionalism</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <img src={image1} alt="About Us" />
          </div>
        </div>

        {/* Mission, Vision, and Team Spirit Section */}
        <div className="mission-vision-team">
          <div className="mission-item">
            <h2>Our Mission</h2>
            <p>To be a leader in the provision of physical & land use planning and environment consultancy services in the region.</p>
          </div>
          <div className="mission-item">
            <h2>Our Vision</h2>
            <p>To provide leadership in private practice in the provision of physical planning and environment consultancy.</p>
          </div>
          <div className="mission-item">
            <h2>Team Spirit</h2>
            <p>Striving towards Planned and Sustainable Environments.</p>
          </div>
        </div>
      </div>
      {/* Visit clients */}
      <div className="clients-section">
        <div className="clients-content">
          <div className="clients-icon-heading">
            <TbWorld className="world-icon" />
            <div className="clients-text">
              <h2>Check Out Our Clients</h2>
              <h3>We make sure to satisfy all our clients</h3>
            </div>
          </div>
          
          <button className="check-clients-button">
          <Link to="/clients">Check All Clients </Link></button>
          
        </div>
      </div>


    </>
  );
}

export default About;