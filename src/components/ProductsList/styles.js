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
  min-height: 60vh;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export default ProductsGrid;
