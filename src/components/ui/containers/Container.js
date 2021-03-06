import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  max-width: ${(props) => props.theme.sizes[props.size || 'lg']};
  width: 100%;
  height: 100%;
`;

export default Container;
