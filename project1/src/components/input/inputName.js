import React from 'react';
import './inputStyle.scss';
import PropTypes from 'prop-types';

const InputNewName = ({
  onChange, 
  value
}) => {
  return (
    <div className = "personN">
      {/* <label> Name </label> <br/> */}
      <input
        className = "myinp"
        value = {value}
        type = "text"
        onChange = {onChange}
        placeholder = "name"
      /> <br/>
    </div>
  )
}

InputNewName.propTypes = {

  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([

    PropTypes.number,
    PropTypes.bool,
    PropTypes.string

  ])
};

export default InputNewName
