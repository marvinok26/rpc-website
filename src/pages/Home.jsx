import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <section className="services">
        <h3>Our Services</h3>
        <div className="service-grid">
          <div>Service 1</div>
          <div>Service 2</div>
          <div>Service 3</div>
          <div>Service 4</div>
        </div>
      </section>

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
