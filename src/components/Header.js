import React from 'react';

function Header({ abrirCarrito }) {
  return (
    <header>
      <div className="containerHeader">
        <h1 className="icono">
          <img src="https://pedidosya.dhmedia.io/image/pedidosya/restaurants/7ab158c8-828b-481c-adeb-bbece50fabb1.jpg?quality=70&width=100&webp=1" alt="logo" />
          Comida Venezolana
        </h1>
        {/* Llamar a abrirCarrito al hacer clic en el ícono del carrito */}
       <a 
 	 href="#" 
 	 id="cartIcon" 
 	onClick={(e) => {
 	   e.preventDefault(); // Prevenir redirección
  	  abrirCarrito(); // Llamar a la función
 	 }}
	>
 	 <i className="fas fa-shopping-cart"></i> Carrito
	</a>
      </div>
    </header>
  );
}

export default Header;
