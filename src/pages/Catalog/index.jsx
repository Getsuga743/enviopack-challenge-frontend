import React, { useState } from 'react';
import CatalogControllers from '../../components/CatalogControllers';
import Pagination from '../../components/Pagination';
import ProductItem from '../../components/ProductItem';
import ProductsGrid from '../../components/ProductsList/styles';
import Container from '../../components/ui/containers/Container';
import PageContainer from '../../components/ui/containers/PageContainer';
import Spinner from '../../components/ui/Spinner';
import Title from '../../components/ui/Title';
import usePagination from '../../hooks/usePagination';
import useProducts from '../../hooks/useProducts';
import { productsActions } from '../../utils/actions';

function Catalog() {
  const { loading, state, dispatch } = useProducts();
  const { paginateProducts, dispatchPage, limitOfPage, page } = usePagination(state.products);
  const [filterSearchValue, setFilterSearchValue] = useState('');

  const filterProducts = () => {
    if (paginateProducts && filterSearchValue !== '') {
      return paginateProducts.filter((el) => el.title.includes(filterSearchValue));
    }
    return paginateProducts;
  };

  if (loading)
    return (
      <PageContainer>
        <Container
          style={{ margin: 'auto', justifyContent: 'center', height: '90vh', alignItems: 'center' }}
        >
          <Spinner />
        </Container>
      </PageContainer>
    );

  const handleFilter = (e) => {
    e.preventDefault();
    if (e.target.value === '1') {
      dispatch({ type: productsActions.minPrice });
    } else if (e.target.value === '2') {
      dispatch({ type: productsActions.maxPrice });
    } else {
      dispatch();
    }
  };

  return (
    <PageContainer>
      <Title fontSize="xl">Catálogo</Title>
      <Container direction="column">
        <CatalogControllers
          handleFilter={handleFilter}
          setFilterSearchValue={setFilterSearchValue}
          filterSearchValue={filterSearchValue}
        />
        <ProductsGrid>
          {filterProducts().map((product) => (
            <ProductItem key={product.id} title={product.title} price={product.price} />
          ))}
        </ProductsGrid>
        <Pagination page={page} limitOfPage={limitOfPage} dispatchPage={dispatchPage} />
      </Container>
    </PageContainer>
  );
}

export default Catalog;
