import React, { useContext } from 'react';
import CatalogControllers from '../../components/CatalogControllers';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductsGrid from '../../components/ProductsList/styles';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/containers/Container';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';
import { ProductsContext } from '../../context/ProductsContext';
import { PaginationContainer } from './styles';

function Catalog() {
  const { loading, products } = useContext(ProductsContext);
  if (loading) return <div>loading...</div>;

  return (
    <PageContainer>
      <Title fontSize="xl">Catálogo</Title>
      <Container direction="column">
        <CatalogControllers />
        <ProductsGrid>
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} title={product.title} price={product.price} />
            ))}
        </ProductsGrid>
        <PaginationContainer size="sm">
          <Button size="sm">Anterior</Button>
          <span>1/3</span>
          <Button size="sm">Siguiente</Button>
        </PaginationContainer>
      </Container>
    </PageContainer>
  );
}

export default Catalog;
