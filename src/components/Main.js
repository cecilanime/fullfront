import React, { useState } from 'react';
import Card from './Card';
import CardHorizontal from './CardHorizontal';
import Modal from './Modal';
import ModalCarrito from './ModalCarrito';
import Header from './Header';

function Main() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const abrirModal = (title, price, image, description) => {
    setSelectedProduct({ title, price, image, description });
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setSelectedProduct({});
  };

  const abrirCarrito = () => {
    setCartModalOpen(true);
  };

  const cerrarCarrito = () => {
    setCartModalOpen(false);
  };

  const onAddToCart = (product, cantidad, totalPrecio) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item.title === product.title);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevItems];
        updatedCart[existingProductIndex].cantidad += cantidad;
        updatedCart[existingProductIndex].totalPrecio =
          updatedCart[existingProductIndex].cantidad * updatedCart[existingProductIndex].price;
        return updatedCart;
      } else {
        return [...prevItems, { ...product, cantidad, totalPrecio }];
      }
    });

    cerrarModal();
    abrirCarrito();
  };

  const updateCart = (index, action) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems];
      if (action === 'increase') {
        updatedCart[index].cantidad += 1;
        updatedCart[index].totalPrecio = updatedCart[index].cantidad * updatedCart[index].price;
      } else if (action === 'decrease') {
        updatedCart[index].cantidad -= 1;
        if (updatedCart[index].cantidad <= 0) {
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index].totalPrecio = updatedCart[index].cantidad * updatedCart[index].price;
        }
      }
      return updatedCart;
    });
  };

  // Nueva función para vaciar el carrito
  const vaciarCarrito = () => {
    setCartItems([]); // Vacía el carrito
  };

  return (
    <>
      <Header abrirCarrito={abrirCarrito} />
      <main style={{ position: 'relative' }}>
        <h2>¡Bienvenidos a lo mejor de Venezuela!</h2>
        <h2>Conoce nuestro menú</h2>
        <h3>!!Productos más vendidos &#x1F4F8; fotos reales!!</h3>

        <div className="main-container">
          <div className="cards-container">
            <Card 
              title="¡Arepa bien abundante: $2500 la unidad!" 
              image="./imagenes/ArepaCarneDesmechadayQueso.png" 
              description="Arepa de carne desmechada, cocción cuidada, productos de primera calidad."
              price={2500}
              onClick={abrirModal}
            />
            <Card 
              title="¡Empanada riquísima: $2000 la unidad!" 
              image="./imagenes/Empanadas_carne.png" 
              description="Empanada venezolana de carne, cortada a cuchillo, productos de primera calidad."
              price={2000}
              onClick={abrirModal}
            />
            <Card 
              title="Tequeños de queso vaquero + salsa de ajo." 
              image="./imagenes/tequeños.png" 
              description="12 Tequeños por $4500, con el mejor queso venezolano. Salsa de ajo incluida."
              price={4500}
              onClick={abrirModal}
            />
          </div>
        </div>

        <h3>Arepas generosas &#x1F389;</h3>
        <div className="card-wrapper">
          <CardHorizontal 
            title="Arepa de carne desmechada" 
            image="./imagenes/ArepaCarneDesmechadayQueso.png" 
            description="Promoción a $2500 cada unidad. Carne desmechada con vegetales."
            price={2500}
            onClick={abrirModal}
          />
          <CardHorizontal 
            title="Arepa de Chorizo y salsa criolla" 
            image="./imagenes/ArepaChorizo.png" 
            description="Promoción a $2500 cada unidad. Chorizo vacuno con salsa criolla y queso."
            price={2500}
            onClick={abrirModal}
          />
        </div>

        <Modal 
          isOpen={isModalOpen} 
          onClose={cerrarModal} 
          product={selectedProduct} 
          onAddToCart={onAddToCart} 
        />

        {isCartModalOpen && (
          <ModalCarrito 
            onClose={cerrarCarrito} 
            cartItems={cartItems} 
            updateCart={updateCart}
            vaciarCarrito={vaciarCarrito} // Pasa vaciarCarrito a ModalCarrito
          />
        )}
      </main>
    </>
  );
}

export default Main;
