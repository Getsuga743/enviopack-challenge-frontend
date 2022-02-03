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
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    heigth: auto;
    border-radius: 0 6px 6px 0;
    overflow: hidden;
    img {
      width: 100%;
      heigth: auto;
      object-fit: contain;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    justify-self: flex-start;
    margin: auto auto auto 1rem;
    text-align: start;
    width: fit-content;
  }
  > span:nth-child(3) {
    justify-self: flex-end;
    margin: auto 2rem auto auto;
  }
`;

export default CartItemContainer;
