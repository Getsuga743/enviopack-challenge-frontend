import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

function Catalog() {
  const { loading, products } = useContext(ProductsContext);

  if (loading) return <div>loading...</div>;

  return (
    <ul>{products && products.map((product) => <li key={product.id}>{product.title}</li>)}</ul>
  );
}

export default Catalog;
