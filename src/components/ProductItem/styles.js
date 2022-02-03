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
    heigth: 30rem;
    img {
      width: 100%;
      heigth: auto;
      object-fit: contain;
    }
  }
  > div:not(div:nth-child(1)) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    h3 {
      margin: 0;
    }
    p {
      margin: 1rem 0;
      font-weight: bold;
      justify-self: flex-end;
    }
  }
`;

export default ProductContainer;
