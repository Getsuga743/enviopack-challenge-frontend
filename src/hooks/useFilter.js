import { useState } from 'react';

function useFilter(paginateProducts) {
  const [filterSearchValue, setFilterSearchValue] = useState('');

  const filterProducts = () => {
    if (paginateProducts && filterSearchValue !== '') {
      return paginateProducts.filter((el) => el.title.includes(filterSearchValue));
    }
    return paginateProducts;
  };
  return {
    filterProducts,
    filterSearchValue,
    setFilterSearchValue,
  };
}
export default useFilter;
