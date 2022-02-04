import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import { cartActions } from '../utils/actions';

export const CartContext = React.createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case cartActions.add:
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + action.payload.price,
        quantity: state.products.length + 1,
      };

    case cartActions.removeAll:
      return { ...state, products: [], total: 0, quantity: 0 };
    case cartActions.removeById:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== action.payload.id),
        total: state.total - action.payload.price,
        quantity: state.products.length - 1,
      };
    default:
      return { ...state };
  }
}

const cacheCartProducts = JSON.parse(window.localStorage.getItem('cartState'));
const initialState = {
  products: cacheCartProducts?.products || [],
  total: cacheCartProducts?.total || 0,
  quantity: cacheCartProducts?.products.length || 0,
};
function init(initState) {
  return { ...initState };
}

function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState, init);
  const CartValue = useMemo(() => ({ cartState, dispatchCart }), [cartState]);
  return <CartContext.Provider value={CartValue}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default CartProvider;
