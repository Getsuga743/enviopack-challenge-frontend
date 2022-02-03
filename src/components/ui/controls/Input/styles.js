import styled from 'styled-components';

const StyledInput = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  height: 4rem;
  width: 110%;
  background-color: ${(props) => props.theme.colors.accent1};
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: gray;
  letter-spacing: -0.01rem;
  text-align: start;

  :select,
  :focus {
    outline: 10px solid black !important;
  }
`;

export default StyledInput;
