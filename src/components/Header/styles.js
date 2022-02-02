import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
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

  > *:nth-child(1) {
    justify-self: start;
    width: 100%;
  }
  > *:not(:nth-child(1)) {
    margin: auto 1rem;
  }
`;
