import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: ${(props) => props.theme.sizes.lg};
  height: auto;
`;

export default Container;
