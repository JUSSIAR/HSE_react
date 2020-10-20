import React from 'react'
import InputElement1 from '../input/input1.js'
import InputElement2 from '../input/input2.js'
import MyButton from '../button/button.js'
import './newCaseStyle.css'

const NewCase = ({
  props, 
  change1, 
  change2, 
  click
}) => {
  return (
    <div className = "newCase">
      <fieldset title = "Добавление нового задания">
      <legend> <h3>Creating Form</h3> </legend>
      <InputElement1
        value = {props.name}
        onChange = {change1}
      />
      <InputElement2
        value = {props.description}
        onChange = {change2}
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