import { Link } from 'react-router-dom';


import { TbHeartHandshake, TbBulb, TbPlant2 } from "react-icons/tb";
import { FaBalanceScale } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdOutlineHouse } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { SlBriefcase } from "react-icons/sl";
import { CgArrowTopRight } from "react-icons/cg";

import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <h2>Transform Spaces: Crafting Sustainable Futures Together</h2>
        <button>Learn More</button>
      </header>

      {/* Missions and Values */}
      <section className="missions-values">
        <h3>Our Missions and Values</h3>
        <p>Information about missions and values</p>
      </section>

      {/* Services */}
      <div className="sec-solutions__section">
        {/* security solutions section */}
        <div className="sec-heading">
          <h4>Our Services</h4>
          <p>At RPC, we provide expert services in urban planning, environmental assessments, and landscape architecture. Our focus on sustainability and innovation ensures each project is designed to enhance current needs and benefit future generations.</p>
        </div>
        <div className="sec-solutions">
          {/* list of security solutions */}
          <div className="solution-item">
            <TbPlant2 className="solution-icon" />
            <h5>Sustainability Consulting</h5>
            <p>Protect your network infrastructure from unauthorized access.</p>
          </div>
          <div className="solution-item">
            <SlBriefcase className="solution-icon" />
            <h5>Water Resource Management</h5>
            <p>Secure sensitive data with advanced encryption techniques.</p>
          </div>
          <div className="solution-item">
            <HiOutlineBuildingOffice2 className="solution-icon" />
            <h5>Urban and Regional Planning</h5>
            <p>Ensure the safety of your cloud environments and services.</p>
          </div>
          <div className="solution-item">
            <GiWorld className="solution-icon" />
            <h5>GIS and Mapping Services</h5>
            <p>Protect endpoint devices from cyber threats.</p>
          </div>
          <div className="solution-item">
            <TbBulb className="solution-icon" />
            <h5>Environmental Impact Assessments</h5>
            <p>Defend against viruses, trojans, and other malware.</p>
          </div>
          <div className="solution-item">
            <TbHeartHandshake className="solution-icon" />
            <h5>Community Planning</h5>
            <p>Ensure your applications are secure from vulnerabilities.</p>
          </div>
          <div className="solution-item">
            <FaBalanceScale className="solution-icon" />
            <h5>Environmental Policy</h5>
            <p>Ensure your applications are secure from vulnerabilities.</p>
          </div>
          <div className="solution-item">
            <MdOutlineHouse className="solution-icon" />
            <h5>Landscape Architecture</h5>
            <p>Ensure your applications are secure from vulnerabilities.</p>
          </div>
        </div>
        <button className="btn-see-more"><Link to="services">See More
        <CgArrowTopRight className="see-icon" />
        </Link> </button>
      </div>

      {/* Clients */}
      <section className="clients">
        <h3>Our Clients</h3>
        <div className="client-grid">
          <div>Client 1</div>
          <div>Client 2</div>
          <div>Client 3</div>
          <div>Client 4</div>
        </div>
      </section>

      {/* The Team */}
      <section className="team">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div>Team Member 1</div>
          <div>Team Member 2</div>
          <div>Team Member 3</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>Customer Testimonials</h3>
        <div className="testimonial-grid">
          <div>Testimonial 1</div>
          <div>Testimonial 2</div>
          <div>Testimonial 3</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
