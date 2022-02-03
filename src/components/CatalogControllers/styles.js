import styled from 'styled-components';
import Container from '../ui/containers/Container';

const ControllersContainer = styled(Container)`
  flex-direction: row;
  height: 6rem;
  justify-content: space-between;
  align-items: end;
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: auto;
  } ;
`;

export default ControllersContainer;
