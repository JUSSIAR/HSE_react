import React from 'react';
import './inputStyle.scss';
import PropTypes from 'prop-types';

const InputNewDesciption = ({
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
        placeholder = "description"
      /> <br/>
    </div>
  )
}

InputNewDesciption.propTypes = {

  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([

    PropTypes.number,
    PropTypes.bool,
    PropTypes.string

  ])
};

export default InputNewDesciption;
