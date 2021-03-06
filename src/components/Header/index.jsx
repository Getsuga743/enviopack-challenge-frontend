import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { HeaderContainer, Nav } from './styles';
import useCart from '../../hooks/useCart';
import Text from '../ui/Text';

export default function Header() {
  const { user } = useContext(UserContext);
  const {
    cartState: { quantity },
  } = useCart();
  return (
    <HeaderContainer>
      {user && (
        <Nav>
          <ul>
            <li>
              <Link to="/">
                <h1>Tienda de productos</h1>
              </Link>
            </li>
            <li>
              <Text textAlign="center" fontSize="md" fontWeight="400">
                {user.firstName}
              </Text>
            </li>
            <li>
              <Text as={Link} to="/cart" fontSize="md" fontWeight="bold">
                Carrito({quantity})
              </Text>
            </li>
            <li>
              <Text fontSize="md" fontWeight="400">
                Créditos: ${user.credit}
              </Text>
            </li>
          </ul>
        </Nav>
      )}
    </HeaderContainer>
  );
}
