import React from 'react';

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><img className="footer-img" src="/imagenes/call.png" alt="call" /></li>
          <li><img className="footer-img" src="/imagenes/data_fiscal.png" alt="data fiscal" /></li>
          <li><img src="/imagenes/camara.png" alt="camara" /></li>
          <i className="fab fa-whatsapp" style={{ fontSize: '92px', marginTop: '30px', marginLeft: '20px', color: 'rgb(105, 100, 100)' }}></i>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
