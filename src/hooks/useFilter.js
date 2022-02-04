import { useState, useEffect } from 'react';

function useFilter(paginateProducts) {
  const [filterSearchValue, setFilterSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(() => paginateProducts);
  useEffect(() => {
    const filterProducts = () => {
      if (paginateProducts && filterSearchValue !== '') {
        return paginateProducts.filter((el) => el.title.toLowerCase().includes(filterSearchValue));
      }
      return paginateProducts;
    };
    setFilteredProducts(filterProducts());
  }, [filterSearchValue, paginateProducts, setFilterSearchValue, setFilteredProducts]);

  return {
    filteredProducts,
    filterSearchValue,
    setFilterSearchValue,
  };
}
export default useFilter;
