import React from 'react'
import './inputStyle.scss'

const InputNewName = ({
  onChange, 
  value
}) => {
  return (
    <div className = "person">
      <label> Name </label>
      <input
        value = {value}
        type = "text"
        onChange = {onChange}
        placeholder = "name..."
      /> <br/>
    </div>
  )
}

export default InputNewName