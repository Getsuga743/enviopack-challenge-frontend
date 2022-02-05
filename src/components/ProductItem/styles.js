import styled from 'styled-components';

const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  align-items: center;
  padding: 2rem;
  > div:nth-child(1) {
    width: 20rem;
    height: auto;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  p {
    margin: 1rem 0;
    justify-self: flex-end;
  }
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    max-width: 32.1rem;
    margin: auto;
  }
`;

export default ProductContainer;
