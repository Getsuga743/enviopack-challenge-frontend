import { useContext, useEffect } from 'react';
import api from '../api';
import { CartContext } from '../context/CartContext';
import { cartActions } from '../utils/actions';

export default function useCart() {
  const { cartState, dispatchCart } = useContext(CartContext);

  useEffect(() => {
    const cartStateToLocalStorage = JSON.stringify(cartState);
    localStorage.setItem('cartState', cartStateToLocalStorage);
  }, [cartState]);

  const handleAddCart = (id) => {
    api.getProduct(id).then((product) => {
      const action = {
        type: cartActions.add,
        payload: product,
      };
      dispatchCart(action);
    });
  };
  const handleRemoveCartById = (id, price) => {
    const action = {
      type: cartActions.removeById,
      payload: { id, price },
    };
    dispatchCart(action);
  };
  const handleRemoveAll = () => {
    const action = {
      type: cartActions.removeAll,
    };
    dispatchCart(action);
  };
  return { cartState, handleAddCart, handleRemoveCartById, handleRemoveAll };
}
