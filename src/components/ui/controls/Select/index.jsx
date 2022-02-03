import PropTypes from 'prop-types';
import React from 'react';

import { StyledSelect, SelectLabel } from './styles';

function Select({ labelText, name, defaultValue, children, value, onChange }) {
  return (
    <SelectLabel htmlFor={name}>
      <span>{labelText}</span>
      <StyledSelect
        name={name}
        id={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      >
        {children}
      </StyledSelect>
    </SelectLabel>
  );
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default Select;
