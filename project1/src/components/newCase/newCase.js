import React from 'react'
import InputNewName from '../input/inputName.js'
import InputNewDesciption from '../input/inputDescription.js'
import MyButton from '../button/button.js'
import './newCaseStyle.css'

const NewCase = ({
  props, 
  changeName, 
  changeDescription, 
  click
}) => {
  return (
    <div className = "newCase">
      <fieldset title = "Добавление нового задания">
      <legend> <h3>Creating Form</h3> </legend>
      <InputNewName
        value = {props.name}
        onChange = {changeName}
      />
      <InputNewDesciption
        value = {props.description}
        onChange = {changeDescription}
      />
      <MyButton 
        onClick = {click}
        index = {undefined}
        value = "Push a new case!"
      />
      </fieldset>
    </div>
  )
}

export default NewCase