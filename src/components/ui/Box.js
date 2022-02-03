import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  padding: 1rem;
  height: ${(props) => props.height};
  width: ${(props) => props.theme.sizes[props.width]};
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
`;

export default Box;
