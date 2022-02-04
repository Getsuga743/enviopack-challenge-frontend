import PropTypes from 'prop-types';
import React from 'react';
import Label from '../../Label';
import StyledInput from './styles';

function Input({ type, value, name, onChange, placeholder }) {
  return (
    <Label htmlFor={name}>
      <StyledInput
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Label>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
