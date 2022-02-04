import React from 'react';
import CatalogControllers from '../../components/CatalogControllers';
import Pagination from '../../components/Pagination';
import ProductItem from '../../components/ProductItem';
import ProductsGrid from '../../components/ProductsList/styles';
import Container from '../../components/ui/containers/Container';
import PageContainer from '../../components/ui/containers/PageContainer';
import Spinner from '../../components/ui/Spinner';
import Title from '../../components/ui/Title';
import useCart from '../../hooks/useCart';
import useFilter from '../../hooks/useFilter';
import usePagination from '../../hooks/usePagination';
import useProducts from '../../hooks/useProducts';
import { productsActions } from '../../utils/actions';

function Catalog() {
  const { loading, state, dispatch } = useProducts();
  const {
    cartState: { products: cartProducts },
  } = useCart();

  const { paginateProducts, dispatchPage, limitOfPage, page } = usePagination(state.products);
  const { filterProducts, filterSearchValue, setFilterSearchValue } = useFilter(paginateProducts);
  const { handleAddCart } = useCart();

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
            <ProductItem
              handleAddCart={handleAddCart}
              key={product.sku}
              id={product.id}
              title={product.title}
              price={product.price}
              isInCart={cartProducts.some((el) => el.id === product.id)}
            />
          ))}
        </ProductsGrid>
        <Pagination page={page} limitOfPage={limitOfPage} dispatchPage={dispatchPage} />
      </Container>
    </PageContainer>
  );
}

export default Catalog;
