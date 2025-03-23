import React, { useState } from 'react';
import ImageRow from '../components/Images';
import { Helmet } from 'react-helmet';
import { FiMail, FiPhone, FiClock, FiMapPin, FiSend } from 'react-icons/fi';
// Import EmailJS
// You'll need to install emailjs-com: npm install emailjs-com
import emailjs from 'emailjs-com';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Status state to handle form submission status
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: ''
    });

    // EmailJS service configuration - replace with your actual values
    const serviceId = 'service_id';
    const templateId = 'template_id';
    const userId = 'public_key';

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'email address'
      };

      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Set success status
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Your message has been sent successfully. We will get back to you soon!'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false,
          message: ''
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'There was an error sending your message. Please try again later.'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Real Plan Consultants</title>
        <meta name="description" content="Get in touch with Real Plan Consultants for your planning and GIS needs." />
      </Helmet>

      <div className="w-full">
        <ImageRow />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl mb-12 text-primary-600 text-center font-bold">CONTACT US</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Contact Information and Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary-600 border-b border-neutral-200 pb-3">Contact Details</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <FiClock className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Operation Hours:</p>
                  <p className="text-neutral-600">Monday to Friday between 8:00 AM to 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telephone Contacts:</p>
                  <p className="text-neutral-600">0722477500, 020-2214116</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMail className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <a href="mailto:email_address" className="text-primary-600 hover:underline">planners@realplan.co.ke</a>
                </div>
              </div>

              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-4 text-xl text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location:</p>
                  <address className="text-neutral-600 not-italic">
                    4th Avenue Towers,<br />
                    Along 4th Ngong Avenue (off Bishop/Ngong road),<br />
                    Upper Hill, Nairobi<br />
                    (Suite 16.4, 16th Floor)
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-primary-600 border-b border-neutral-200 pb-3">Leave us a Message:</h3>
              
              {/* Success message */}
              {formStatus.success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              {/* Error message */}
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 bg-white border border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Your Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 bg-white border border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message:</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange} 
                    rows="5" 
                    required 
                    className="w-full p-3 bg-white border border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus.submitting}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="md:w-1/2 flex flex-col">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 text-primary-600 border-b border-neutral-200 pb-3">Visit Us</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <iframe
                className="w-full h-[450px] rounded border border-neutral-200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=4th%20Avenue%20Towers,%20along%204th%20Ngong%20Avenue,%20Upper%20Hill,%20Nairobi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                title="Google Maps Location for Real Plan Consultants"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;