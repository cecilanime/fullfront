import React, { useState, useEffect } from 'react';
import '../css/modal.css';

function Modal({ isOpen, onClose, product, onAddToCart }) {
  const [cantidad, setCantidad] = useState(1);
  const [totalPrecio, setTotalPrecio] = useState(product.price || 0);

  useEffect(() => {
    setTotalPrecio(cantidad * product.price);
  }, [cantidad, product.price]);

  if (!isOpen) return null; // Si no está abierto, no renderizamos el modal

  const incrementarCantidad = () => setCantidad(cantidad + 1);
  const disminuirCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        
        <div id="modal-card-content">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>

        <div className="cantidad-container">
          <button className="minus-button" onClick={disminuirCantidad}>-</button>
          <span className="cantidad">{cantidad}</span>
          <button className="plus-button" onClick={incrementarCantidad}>+</button>
        </div>

        <div>
          <p>Total: ${totalPrecio}</p>
        </div>

        <button
          className="buy-confirm"
          onClick={() => {
            onAddToCart(product, cantidad, totalPrecio);
            onClose(); // Cierra el modal actual después de agregar al carrito
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Modal;
