import styled from 'styled-components';

const ButtonSizes = {
  full: '100%',
  lg: '20rem',
  md: '15rem',
  sm: '10rem',
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  width: ${(props) => ButtonSizes[props.size]};
  height: 3.5rem;
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: all 100ms;
  :hover {
    filter: brightness(1.5);
  }
`;
export default Button;
