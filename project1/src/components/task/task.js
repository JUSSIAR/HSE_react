import React from 'react'
import './taskStyle.css'
import MyButton from '../button/button.js'

const completed_status = ["In progress...", "Done"];

const Task = ({props, click}) => {
  return (
    <div className = {(props.completed == 1) ? "task_item1" : "task_item2"}>
      <div className = "block1">
        <h2 className = "header2"> {props.name} </h2>
        <p className = "description"> {props.description} </p>
      </div>
      <div className = "block2">
        <p className = "status"> {completed_status[props.completed]} </p>
        <MyButton 
          onClick = {click}
          index = {props.id}
          value = "Change status"
        />
      </div>
    </div>
  )
}

export default Task