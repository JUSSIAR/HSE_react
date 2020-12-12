import React from 'react';
import './inputStyle.scss';

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

export default InputNewDesciption;
