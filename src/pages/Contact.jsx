import React from 'react';
import '../styles/Contact.css';
import ImageRow from '../components/Images';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <ImageRow />
      <div className="contact-container">
        <h1 className="contact-heading">CONTACT US</h1>
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
            <iframe className='iframe'
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=4th%20Avenue%20Towers,%20along%204th%20Ngong%20Avenue,%20Upper%20Hill,%20Nairobi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
