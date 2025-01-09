// src/components/CardHorizontal.js
import React from 'react';

function CardHorizontal({ title, image, description, price, onClick }) {
  // Función para manejar el clic y abrir el modal con la información del producto
  const handleClick = () => {
    onClick(title, price, image, description);
  };

  return (
    <div className="card-horizontal">
      <img src={image} alt={title} />
      <div className="cards-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="buy-button" onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
}

export default CardHorizontal;
