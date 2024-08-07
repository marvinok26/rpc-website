// src/components/Clients.js
import React from 'react';
import CategorySection from './CategorySection';
import ImageRow from '../components/Images';
import { categories } from '../data/clients-data';
import '../styles/Clients.css';

const Clients = () => {
  return (
    <>
      <ImageRow />
      <h1 className="client-heading">OUR CLIENTS</h1>
      <div className="clients-page">
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            images={category.images}
          />
        ))}
      </div>
    </>
  );
};

export default Clients;
