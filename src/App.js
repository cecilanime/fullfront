import React, { useState } from 'react';
import Main from './components/Main';

function App() {
  const [carrito, setCarrito] = useState([]); 
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isCartOpen, setCartOpen] = useState(false); 

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto, cantidad, totalPrecio) => {
    setCarrito((prevCarrito) => {
      const existingProductIndex = prevCarrito.findIndex(
        (item) => item.title === producto.title
      );
      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, actualizar cantidad y precio total
        const updatedCarrito = [...prevCarrito];
        updatedCarrito[existingProductIndex].cantidad += cantidad;
        updatedCarrito[existingProductIndex].totalPrecio =
          updatedCarrito[existingProductIndex].cantidad * producto.price;
        return updatedCarrito;
      } else {
        // Si el producto no está en el carrito, agregarlo
        return [...prevCarrito, { ...producto, cantidad, totalPrecio }];
      }
    });
    setModalOpen(false); 
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]); // Vacía el carrito
  };

  // Función para abrir el carrito
  const abrirCarrito = () => {
    setCartOpen(true);
  };

  // Función para cerrar el carrito
  const cerrarCarrito = () => {
    setCartOpen(false);
  };

  return (
    <div>
      <Main
        agregarAlCarrito={agregarAlCarrito}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        carrito={carrito} // Pasar el carrito como prop a Main
        vaciarCarrito={vaciarCarrito} // Pasar la función para vaciar el carrito
        abrirCarrito={abrirCarrito}
        cerrarCarrito={cerrarCarrito}
      />
      {/* Modal del carrito */}
      {isCartOpen && (
        <div className="cart-modal">
          <h2>Carrito de Compras</h2>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.title} - {producto.cantidad} x ${producto.price}
              </li>
            ))}
          </ul>
          <button onClick={cerrarCarrito}>Cerrar Carrito</button>
        </div>
      )}
    </div>
  );
}

export default App;
