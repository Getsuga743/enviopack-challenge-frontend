import styled from 'styled-components';

const CartItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: 2rem 2rem 2rem 0;
  background-color: ${(props) => props.theme.colors.accent1};
  border-radius: 6px;
  margin: 0 0 1rem 0;
  & div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 7rem;
    max-width: 7rem;
    height: auto;
    border-radius: 0 6px 6px 0;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  & div:nth-child(2) {
    width: 100%;
    display: flex;
    & :nth-child(1) {
      margin: 0 0 0 1rem;
      width: 100%;
      text-align: start;
    }
    & :nth-last-child(2) {
      display: flex;
      align-items: center;
      margin: 0 1rem;
    }
    > button {
      justify-self: flex-end;
    }
  }
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    height: auto;
    padding: 2rem;
    & {
      flex-wrap: wrap;
    }
    & div:nth-child(1) {
      height: auto;
      width: 100%;
      margin: auto;
      max-width: 25rem;
      border-radius: 6px;
    }
    & div:nth-child(2) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & :nth-child(1) {
        text-align: center;
      }
      & :not(:nth-last-child(1)) {
        margin: 1rem 0;
      }
    }
  }
`;

export default CartItemContainer;
