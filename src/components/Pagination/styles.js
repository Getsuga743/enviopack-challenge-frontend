import styled from 'styled-components';
import Container from '../ui/containers/Container';

const PaginationContainer = styled(Container)`
  direction: row;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: auto;
  & span {
    margin: auto;
  }
`;
export default PaginationContainer;
