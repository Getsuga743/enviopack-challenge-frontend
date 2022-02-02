import PropTypes from 'prop-types';
import React, { useState, useMemo, useEffect } from 'react';
import api from '../api/index';

export const ProductsContext = React.createContext(null);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getProducts().then((apiProducts) => {
      setProducts(apiProducts);
      setLoading(false);
    });
  }, []);

  const ProductsValue = useMemo(() => ({ products, loading }));

  return <ProductsContext.Provider value={ProductsValue}>{children}</ProductsContext.Provider>;
}

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default ProductsProvider;
