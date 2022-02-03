import PropTypes from 'prop-types';
import React, { useMemo, useReducer } from 'react';
import { productsActions } from '../utils/actions';

export const ProductsContext = React.createContext(null);
function productsReducer(state, action) {
  switch (action.type) {
    case productsActions.add:
      return { products: action.payload };
    case productsActions.maxPrice:
      return { products: state.products.sort((a, b) => b.price - a.price) };
    case productsActions.minPrice:
      return { products: state.products.sort((a, b) => a.price - b.price) };
    default:
      return { products: state.products };
  }
}
function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, { products: [] });

  const ProductsValue = useMemo(() => ({ state, dispatch }));

  return <ProductsContext.Provider value={ProductsValue}>{children}</ProductsContext.Provider>;
}

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default ProductsProvider;
