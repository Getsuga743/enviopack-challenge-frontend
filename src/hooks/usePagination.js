import { useReducer } from 'react';
import { paginationActions } from '../utils/actions';

function paginationReducer(state, action) {
  switch (action.type) {
    case paginationActions.add:
      return state + 1;
    case paginationActions.sub:
      return state - 1;
    default:
      return state;
  }
}

export default function usePagination(products) {
  const limitOfPage = Math.floor((products.length - 1) / 6);
  const [page, dispatchPage] = useReducer(paginationReducer, 1);

  const paginateProducts = products.slice((page - 1) * 6, page * 6);

  return { paginateProducts, dispatchPage, limitOfPage, page };
}
