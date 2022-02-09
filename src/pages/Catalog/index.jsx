import React from 'react';
import CatalogControllers from '../../components/CatalogControllers';
import Pagination from '../../components/Pagination';
import ProductItem from '../../components/ProductItem';
import ProductsGrid from '../../components/ProductsList/styles';
import Container from '../../components/ui/containers/Container';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';
import useCart from '../../hooks/useCart';
import useFilter from '../../hooks/useFilter';
import usePagination from '../../hooks/usePagination';
import useProducts from '../../hooks/useProducts';
import PageSpinner from '../PageSpinner';

function Catalog() {
  const { loading, state, applyFilterToProducts } = useProducts();
  const {
    cartState: { products: cartProducts },
  } = useCart();

  const { filteredProducts, filterSearchValue, setFilterSearchValue } = useFilter(state.products);
  const { paginatedProducts, dispatchPage, limitOfPage, page } = usePagination(filteredProducts);
  const { handleAddCart } = useCart();

  const handleFilter = (e) => {
    e.preventDefault();
    applyFilterToProducts(e.target.value);
  };

  if (loading) return <PageSpinner />;

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
          {paginatedProducts.map((product) => (
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
