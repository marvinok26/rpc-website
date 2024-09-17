import React from 'react';
import ImageRow from '../components/Images';
import image1 from '../Assets/Images/buildings/building-102840_1280.jpg';
import { GiConfirmed } from 'react-icons/gi';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <ImageRow />
      <div className="about-container text-center p-4 md:p-8 mx-4 md:mx-20">
        <h1 className="about-heading text-2xl md:text-4xl text-[#4263A5] mb-6 md:mb-8">ABOUT US</h1>
        <div className="about-content flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8">
          <div className="flex-1 text-left">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl mb-2">IDEAS TO PLANS</h2>
              <h3 className="text-lg md:text-xl mb-4">Transforming Visions into Sustainable Solutions</h3>
              <p className="text-sm md:text-base mb-6">Real Plan Consultants Ltd has been a leading force in land use and environmental consultancy in Kenya since 2003. With a team of certified experts, we deliver sustainable solutions for diverse clients, including governments and developers. Our collaboration with architects and engineers ensures comprehensive and innovative project outcomes.</p>
              <h3 className="text-lg md:text-xl mb-4">CORE VALUES</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-2 flex items-center text-sm md:text-base">
                  <GiConfirmed className="mr-2 text-[#4263A5]" /> Integrity
                </li>
                <li className="mb-2 flex items-center text-sm md:text-base">
                  <GiConfirmed className="mr-2 text-[#4263A5]" /> Leadership
                </li>
                <li className="mb-2 flex items-center text-sm md:text-base">
                  <GiConfirmed className="mr-2 text-[#4263A5]" /> Sustainability
                </li>
                <li className="mb-2 flex items-center text-sm md:text-base">
                  <GiConfirmed className="mr-2 text-[#4263A5]" /> Team Work
                </li>
                <li className="mb-2 flex items-center text-sm md:text-base">
                  <GiConfirmed className="mr-2 text-[#4263A5]" /> Professionalism
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <img src={image1} alt="About Us" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mission, Vision, and Team Spirit Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-6 md:mt-8">
          <div className="flex-1 text-center">
            <h2 className="text-lg md:text-xl mb-2">Our Mission</h2>
            <p className="text-sm md:text-base">To be a leader in the provision of physical & land use planning and environment consultancy services in the region.</p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-lg md:text-xl mb-2">Our Vision</h2>
            <p className="text-sm md:text-base">To provide leadership in private practice in the provision of physical planning and environment consultancy.</p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-lg md:text-xl mb-2">Team Spirit</h2>
            <p className="text-sm md:text-base">Striving towards Planned and Sustainable Environments.</p>
          </div>
        </div>
      </div>

      {/* Visit clients */}
      <div className="clients-section bg-gradient-to-r from-[#CED6E0] to-[#FFFFFF] p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="clients-content mb-4 md:mb-7 flex flex-col md:flex-row items-center w-full">
          <div className="clients-icon-heading flex items-center gap-4 mx-4 md:mx-8">
            <TbWorld className="w-12 md:w-16 h-auto" />
            <div className="text-left ml-4 md:ml-8">
              <h2 className="text-2xl md:text-3xl m-0 text-[#4263A5]">Check Out Our Clients</h2>
              <h3 className="text-sm md:text-base text-[#333] m-0">We make sure to satisfy all our clients</h3>
            </div>
          </div>
          <div className="mt-4 md:ml-14 flex justify-center md:justify-start">
  <button className="py-3 px-6 text-white bg-[#4263A5] rounded-md hover:bg-[#2c4a8f] transition-colors duration-300 mx-20">
    <Link to="/clients">Check All Clients</Link>
  </button>
</div>




        </div>
      </div>
    </>
  );
}

export default About;
