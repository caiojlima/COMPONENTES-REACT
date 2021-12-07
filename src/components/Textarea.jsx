import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ id, name, value, label, callback, cols, rows }) => (
  <label htmlFor={ id }>
    { label }
    <textarea
      name={ name }
      id={ id }
      cols={ cols }
      rows={ rows }
      value={ value }
      onChange={ callback }
    />
  </label>
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  cols: PropTypes.number,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  cols: 30,
  rows: 10,
};

export default Textarea;
