import React from 'react';
import axios from 'axios'; // Asegúrate de instalar axios: npm install axios
import '../css/modalCarrito.css';

function ModalCarrito({ cartItems, onClose, updateCart, vaciarCarrito }) {
  const handleIncrease = (index) => {
    updateCart(index, 'increase');
  };

  const handleDecrease = (index) => {
    updateCart(index, 'decrease');
  };

  // Calcular el subtotal sumando los totales de cada ítem
  const subtotal = cartItems
    .filter((item) => item.cantidad > 0) // Excluir productos eliminados
    .reduce((acc, item) => acc + item.totalPrecio, 0);

  // Función para enviar el pedido al backend
  const enviarPedido = async () => {
    // Estructurar los datos del pedido
    const pedido = {
      items: cartItems.map((item) => ({
        title: item.title,
        quantity: item.cantidad,
        price: item.price,
      })),
      totalPrice: subtotal,
    };

    try {
      //ruta local
      // const response = await axios.post('http://localhost:5000/api/orders', pedido);
      //ruta railWay
      const response = await axios.post('https://fullback-production.up.railway.app/api/orders', pedido); 
      console.log('Pedido enviado:', response.data);
      alert('¡Pedido enviado con éxito!');

      // Vaciar el carrito después de que MongoDB responda con éxito
      vaciarCarrito();
      onClose(); // Cierra el modal
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
      alert('Hubo un error al enviar el pedido. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="modal-carrito" onClick={onClose}>
      <div className="modal-carrito-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-carrito-close" onClick={onClose}>&times;</span>
        <h2>Carrito de compras</h2>
        <ul id="lista-carrito">
          {cartItems.map((producto, index) => (
            <li key={index}>
              <div>
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
              </div>
              <div className="cart-item-quantity">
                <button
                  className="decrementar-cantidad"
                  onClick={() => handleDecrease(index)}
                >
                  -
                </button>
                <span>{producto.cantidad}</span>
                <button
                  className="incrementar-cantidad"
                  onClick={() => handleIncrease(index)}
                >
                  +
                </button>
              </div>
              <p>Total: ${producto.totalPrecio}</p>
            </li>
          ))}
        </ul>
        {/* Subtotal */}
        <div className="subtotal">
          <h3>Subtotal:</h3>
          <p>${subtotal}</p>
        </div>
        {/* Botón para enviar el pedido */}
        <button className="buy-button" onClick={enviarPedido}>
          Enviar pedido
        </button>
      </div>
    </div>
  );
}

export default ModalCarrito;
