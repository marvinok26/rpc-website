import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/Contact.css';
import ImageRow from '../components/Images';

const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Ensure you use your actual Google Maps API key

const mapCenter = {
  lat: -1.2921, // Replace with the latitude of the company's office
  lng: 36.8219, // Replace with the longitude of the company's office
};

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <ImageRow />
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-content">
          <div className="contact-details">
            <h2>Contact Details</h2>
            <p><strong>Operation hours:</strong></p>
            <p>Monday to Friday between 8.00 am to 5.00 pm</p>
            <p><strong>Telephone contacts:</strong></p>
            <p>0722477500</p>
            <p>020-2214116</p>
            <p><strong>Email:</strong></p>
            <p>info@realplan.co.ke</p>
            <p>Or Leave us a Message</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="map-container">
            <h2>Visit Us</h2>
            <p>4th Avenue Towers, along 4th Ngong Avenue (off Bishop/Ngong road)</p>
            <p>Upper Hill, Nairobi</p>
            <p>(Suite 16.4, 16th Floor)</p>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={mapCenter}
                zoom={15}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
