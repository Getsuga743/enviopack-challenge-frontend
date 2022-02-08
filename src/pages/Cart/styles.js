import styled from 'styled-components';

const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    flex-direction: column;
    max-width: ${(props) => props.theme.sizes.sm};
    & :nth-child(1) {
      margin: 0 0 1rem 0;
    }
    & * {
      width: 100%;
    }
  } ;
`;

export default CartButtons;
