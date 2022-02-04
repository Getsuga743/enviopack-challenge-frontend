import styled from 'styled-components';

import { Oval } from 'react-loader-spinner';

const Spinner = styled(Oval)`
  margin: auto;
  color: ${(props) => props.theme.primary};
  height: 80px;
  width: 80px;
`;

export default Spinner;
