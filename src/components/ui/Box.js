import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  padding: 1rem;
  height: ${(props) => props.height};
  max-width: ${(props) => props.theme.sizes[props.width] || props.width};
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  margin: ${(props) => props.m || 'auto'};
  padding: ${(props) => props.p || 'auto'};
`;

export default Box;
