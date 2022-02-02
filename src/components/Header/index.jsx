import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { HeaderContainer, Nav } from './styles';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      {user && (
        <Nav>
          <Link to="/">
            <h1>Tienda de productos</h1>
          </Link>
          <div>
            <span>{user.firstName}</span> <span>{user.lastName}</span>
          </div>
          <Link to="/cart">Carrito(0)</Link>
          <span>Créditos:{user.credit}</span>
        </Nav>
      )}
    </HeaderContainer>
  );
}
