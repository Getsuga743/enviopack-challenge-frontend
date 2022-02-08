import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CartItemContainer from './styles';
import ProductImage from '../../images/image-product.webp';
import Title from '../ui/Title';
import Button from '../ui/Button';

export default function CartItem({ title, price, id, handleRemove }) {
  const [isDisabled, setDisabled] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setDisabled(true);
    handleRemove(id, price);
  };
  const formatedPrice = new Intl.NumberFormat('es-AR').format(price);
  return (
    <CartItemContainer>
      <div>
        <img src={ProductImage} alt={title} />
      </div>
      <div>
        <Title fontSize="sm" as="span">
          {title}
        </Title>
        <span>${formatedPrice}</span>
        <Button disabled={isDisabled} type="button" m="auto 0" size="tny" onClick={handleOnClick}>
          X
        </Button>
      </div>
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  handleRemove: PropTypes.func,
  id: PropTypes.number,
};
