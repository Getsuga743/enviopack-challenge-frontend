import PropTypes from 'prop-types';
import React from 'react';
import ProductsGrid from './styles';

export default function ProductsList({ children }) {
  return <ProductsGrid>{children}</ProductsGrid>;
}

ProductsList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};
