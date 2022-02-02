import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Carrito de Compras</h1>
        <nav>
          <p>User</p>
          <Link to="/cart">Carrito(0)</Link>
          <p>Creditos=200</p>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default Layout;
