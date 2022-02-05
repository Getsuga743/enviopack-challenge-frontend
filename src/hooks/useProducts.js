import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { productsActions } from '../utils/actions';
import api from '../api';

export default function useProducts() {
  const { state, dispatch } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    api.getProducts().then((apiProducts) => {
      dispatch({ type: productsActions.add, payload: apiProducts });
      setLoading(false);
    });
    return () => setLoading(null);
  }, []);

  const applyFilterToProducts = (idFilter) => {
    if (idFilter === '1') {
      dispatch({ type: productsActions.minPrice });
    } else if (idFilter === '2') {
      dispatch({ type: productsActions.maxPrice });
    } else {
      dispatch();
    }
  };

  return { loading, state, applyFilterToProducts };
}
