import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const btnClass = `btn btn-${props.btnClassName}`;
  return (
    <button
      className={btnClass}
      disabled={props.disabled}
      onClick={props.onClick}
      id={props.id}
    >
      {props.btnName}
    </button>
  );
};

Button.propTypes = {
  btnClassName: PropTypes.string,
  btnName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
