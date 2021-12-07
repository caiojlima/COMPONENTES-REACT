import React from 'react';
import PropTypes from 'prop-types'

const Select = ({ id, name, options, defaultValue, label, callback }) => (
  <label htmlFor={ id }>
    { label }
    <select
    id={ id }
    name={ name }
    defaultValue={ defaultValue }
    onChange={ callback }
    >
      {defaultValue && (
      <option value={ defaultValue } disabled>{ defaultValue }</option
      >)}
      { options.map((option) => (
        <option key={ option } value={ option }>{ option }</option>
      )) }
    </select>
  </label>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

Select.defaultProps = {
  defaultValue: '',
}

export default Select;
