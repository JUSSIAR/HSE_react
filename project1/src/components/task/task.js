import React from 'react'
import './taskStyle.css'
import MyButton from '../button/button.js'

const Task = ({props, click}) => {
  return (
    <div className = {(props.completed == 1) ? "taskDone" : "taskInProgress"}>
      <div className = "block1">
        <h2 className = "header2"> {props.name} </h2>
        <p className = "description"> {props.description} </p>
      </div>
      <div className = "block2">
        <p className = "status"> {(props.completed == 0) ? "In progress..." : "Done"} </p>
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