import styled from 'styled-components';

const ButtonSizes = {
  full: '100%',
  lg: '20rem',
  md: '15rem',
  sm: '10rem',
  tny: '2rem',
};

const fontSize = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.accent2 : props.theme.colors.primary};
  border-radius: 3px;
  margin: ${(props) => props.m || 'auto'};
  width: ${(props) => ButtonSizes[props.size]};
  height: 3.5rem;
  font-size: ${(props) => fontSize[props.fontSize] || fontSize.md};
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
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Button;
