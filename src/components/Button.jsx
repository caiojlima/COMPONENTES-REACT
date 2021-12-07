import React from "react";
import PropTypes from 'prop-types';

const Button = ({ id, type, callback, text }) => (
  <button
    id={ id }
    type={ type }
    onClick={ callback }
  >
    { text }
  </button>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
  callback: () => {},
};

export default Button;
