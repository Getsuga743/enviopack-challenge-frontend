import styled from 'styled-components';

const ButtonSizes = {
  full: '100%',
  lg: '20rem',
  md: '15rem',
  sm: '10rem',
  tny: '2rem',
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  margin: ${(props) => props.m || 'auto'};
  width: ${(props) => ButtonSizes[props.size]};
  height: 3.5rem;
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: all 100ms;
  padding: 1.5rem;
  :hover {
    filter: brightness(1.4);
  }
  :active {
    filter: brightness(1);
  }
`;
export default Button;
