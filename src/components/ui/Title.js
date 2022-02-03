import styled from 'styled-components';

const fontSize = {
  sm: '1.5rem',
  md: '2rem',
  lg: '2.5rem',
  xl: '3.5rem',
};

const Title = styled.h3`
  font-weight: 600;
  font-size: ${(props) => fontSize[props.fontSize] || '2.5rem'};
  margin: 2rem auto;
`;

export default Title;
