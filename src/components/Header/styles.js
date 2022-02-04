import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: ${(props) => props.theme.colors.background};
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    > *:nth-child(1) {
      text-align: center;
      justify-self: center;
    }
    flex-direction: column;
  }
  > span:nth-child(2) {
    min-width: 10rem;
    width: auto;
  }
  > *:nth-child(1) {
    justify-self: start;
    width: 100%;
  }
  > *:not(:nth-child(1)) {
    margin: auto 1rem;
    text-align: end;
  }
  > *:nth-last-child(1) {
    margin: auto 0 auto 1rem;
    width: auto;
    min-width: 12rem;
  }
`;
