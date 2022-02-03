import styled from 'styled-components';

const fontSize = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || '300'};
  font-size: ${(props) => fontSize[props.fontSize] || '2.5rem'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

export default Text;
