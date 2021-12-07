import React from "react";
import PropTypes from 'prop-types';

const Input = ({ id, name, callback, label, type, checked, value }) => (
  <label htmlFor={ id }>
    { label }
    <input
    id={ id }
    type={ type }
    value={ value }
    name={ name }
    onChange={ callback }
    checked={ checked }
    />
  </label>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

Input.defaulProps = {
  type: 'text',
  checked: false,
}

export default Input;
