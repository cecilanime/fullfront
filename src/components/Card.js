// src/components/Card.js
import React from 'react';

const Card = ({ title, image, description, price, onClick }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <figure><img src={image} alt={title} /></figure>
      <p>{description}</p>
      <button 
        className="buy-button-card"
        onClick={() => onClick(title, price, image, description)}
      >
        ¡¡Quiero esto!!
      </button>
    </div>
  );
};

export default Card;
