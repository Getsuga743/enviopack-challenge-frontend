import styled from 'styled-components';

const ProductsGrid = styled.ul`
  display: grid;
  place-content: center;
  margin: 2rem 0;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  gap: 1rem;
`;

export default ProductsGrid;
