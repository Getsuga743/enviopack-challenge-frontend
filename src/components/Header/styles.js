import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  position: sticky;
  top: 0;
`;

export const Nav = styled.nav`
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    color: ${(props) => props.theme.colors.background};
    > :nth-child(1) {
      justify-self: start;
      width: 100%;
    }
    > :nth-child(2) {
      min-width: 10rem;
      width: auto;
    }
    > :not(:nth-child(1)) {
      margin: auto 1rem;
      text-align: end;
    }
    > :nth-last-child(1) {
      margin: auto 0 auto 1rem;
      width: auto;
      min-width: 13rem;
    }
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & * {
        margin: auto;
        text-align: center;
      }
      > :nth-last-child(1) {
        margin: auto;
      }
    }
  }
`;
