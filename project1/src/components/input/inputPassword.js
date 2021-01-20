import React from 'react';
import './inputStyle.scss';
import PropTypes from 'prop-types';

const InputPassword = ({
  onChange, 
  value
}) => {
  return (
    <div className = "personD">
      {/* <label> Description </label> <br/> */}
      <input
        className = "myinp"
        value = {value}
        type = "password"
        onChange = {onChange}
        placeholder = "password"
      /> <br/>
    </div>
  )
}

InputPassword.propTypes = {

  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([

    PropTypes.number,
    PropTypes.bool,
    PropTypes.string

  ])
};

export default InputPassword;
