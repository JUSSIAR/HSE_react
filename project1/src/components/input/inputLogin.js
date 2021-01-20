import React from 'react';
import './inputStyle.scss';
import PropTypes from 'prop-types';

const InputLogin = ({
  onChange, 
  value
}) => {
  return (
    <div className = "personD">
      {/* <label> Description </label> <br/> */}
      <input
        className = "myinp"
        value = {value}
        type = "text"
        onChange = {onChange}
        placeholder = "login"
      /> <br/>
    </div>
  )
}

InputLogin.propTypes = {

  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([

    PropTypes.number,
    PropTypes.bool,
    PropTypes.string

  ])
};

export default InputLogin;
