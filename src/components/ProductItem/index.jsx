import PropTypes from 'prop-types';
import React from 'react';
import productImage from '../../images/image-product.webp';
import ProductContainer from './styles';
import Title from '../ui/Title';
import Button from '../ui/Button';

function ProductItem({ title, price }) {
  const formatPrice = new Intl.NumberFormat('es-AR').format(price);
  return (
    <ProductContainer>
      <div>
        <img src={productImage} alt={title} />
      </div>
      <div>
        <Title style={{ minHeight: '54px', margin: '1rem' }} fontSize="md">
          {title}
        </Title>
        <p>$ {formatPrice}</p>
        <Button size="full" m="0">
          Agregar al carrito
        </Button>
      </div>
    </ProductContainer>
  );
}

ProductItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
};

export default ProductItem;
