import React from 'react';
import ImageRow from '../components/Images';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <ImageRow />
      <div className="px-5 py-5">
      <h2 className="services-head">CONTACT US</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-24 mx-4 md:mx-28">
          <div className="md:w-1/2">
            <h2 className="mt-0 text-xl">Contact Details</h2>
            <p><strong>Operation hours:</strong></p>
            <p>Monday to Friday between 8.00 am to 5.00 pm</p>
            <p><strong>Telephone contacts:</strong></p>
            <p>0722477500</p>
            <p>020-2214116</p>
            <p><strong>Email:</strong></p>
            <p>info@realplan.co.ke</p>
            <p>Or Leave us a Message</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="name" className="block">Your Name:</label>
                <input type="text" id="name" name="name" required className="w-full p-2 bg-white border border-gray-300 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block">Your Email:</label>
                <input type="email" id="email" name="email" required className="w-full p-2 bg-white border border-gray-300 rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block">Message:</label>
                <textarea id="message" name="message" required className="w-full p-2 bg-white border border-gray-300 rounded" />
              </div>
              <button type="submit" className="px-5 py-2 bg-blue-500 text-white rounded">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/2">
            <h2 className="mt-0 text-xl">Visit Us</h2>
            <p>4th Avenue Towers, along 4th Ngong Avenue (off Bishop/Ngong road)</p>
            <p>Upper Hill, Nairobi</p>
            <p>(Suite 16.4, 16th Floor)</p>
            <iframe
              className="w-full md:h-[400px] h-[200px] md:w-[600px]"
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
