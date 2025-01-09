// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/estilos.css';
import './css/card.css';
import './css/modal.css';
import './css/modalCarrito.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
