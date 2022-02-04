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

  return (
    <CartItemContainer>
      <div>
        <img src={ProductImage} alt={title} />
      </div>
      <Title fontSize="sm" as="span">
        {title}
      </Title>
      <span>${price}</span>
      <Button disabled={isDisabled} type="button" m="0" size="tny" onClick={handleOnClick}>
        X
      </Button>
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  handleRemove: PropTypes.func,
  id: PropTypes.number,
};
