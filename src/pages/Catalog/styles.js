import styled from 'styled-components';
import Container from '../../components/ui/containers/Container';

export const CatalogContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
  padding: 0 2rem;
`;

export const PaginationContainer = styled(Container)`
  direction: row;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: auto;
  > span {
    margin: auto;
  }
`;
