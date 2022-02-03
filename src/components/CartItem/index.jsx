import PropTypes from 'prop-types';
import React from 'react';
import CartItemContainer from './styles';
import ProductImage from '../../images/image-product.webp';
import Title from '../ui/Title';
import Button from '../ui/Button';

export default function CartItem({ title, price }) {
  return (
    <CartItemContainer>
      <div>
        <img src={ProductImage} alt={title} />
      </div>
      <Title fontSize="sm" as="span">
        {title}
      </Title>
      <span>${price}</span>
      <Button size="tny">X</Button>
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
};
