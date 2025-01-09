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
        <button
            id="cartIcon"
            onClick={abrirCarrito}
            style={{
              backgroundColor: '#FFD700', // Color de fondo
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: 'none',
              font: 'inherit',
            }}
          >
            {/* Logotipo de carrito */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                width: '20px', // Tamaño del logotipo
                height: '20px', // Tamaño del logotipo
              }}
            >
              <path d="M6 6h15l-1.5 9H7.5L6 6z" />
              <circle cx="10" cy="20" r="2" />
              <circle cx="18" cy="20" r="2" />
            </svg>
            Carrito
        </button>
      </div>
    </header>
  );
}

export default Header;
