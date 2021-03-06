import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productImage from '../../images/image-product.webp';
import ProductContainer from './styles';
import Title from '../ui/Title';
import Button from '../ui/Button';
import Text from '../ui/Text';

function ProductItem({ title, price, handleAddCart, id, isInCart }) {
  const [isDisabled, setDisabled] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setDisabled(true);
    handleAddCart(id);
  };
  const formatedPrice = new Intl.NumberFormat('es-AR').format(price);

  return (
    <ProductContainer>
      <div>
        <img src={productImage} alt={title} />
      </div>
      <div>
        <Title style={{ minHeight: '8rem', margin: '1rem' }} fontSize="md">
          {title}
        </Title>
        <Text fontWeight="bold" fontSize="md">
          $ {formatedPrice}
        </Text>
        {isInCart ? (
          <Button as={Link} size="full" m="0" to="/cart">
            <Text fontSize="md" fontWeight="400">
              Ver Carrito
            </Text>
          </Button>
        ) : (
          <Button disabled={isDisabled} size="full" m="0" onClick={handleOnClick}>
            <Text fontSize="md" fontWeight="400">
              Agregar al carrito
            </Text>
          </Button>
        )}
      </div>
    </ProductContainer>
  );
}

ProductItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number,
  handleAddCart: PropTypes.func,
  isInCart: PropTypes.bool,
};

export default ProductItem;
