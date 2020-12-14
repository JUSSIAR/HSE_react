import React from 'react'
import './inputStyle.scss'

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

export default InputNewName
