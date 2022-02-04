import styled from 'styled-components';
import Label from '../../Label';

export const StyledSelect = styled.select`
  height: 4rem;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.accent1};
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: gray;
  letter-spacing: -0.01rem;
  text-align: start;
  option {
    padding: 1rem;
  }
`;

export const SelectLabel = styled(Label)`
  color: ${(props) => props.theme.colors.accent2};
  font-size: 1.5rem;
  text-transform: uppercase;
`;
