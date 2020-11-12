import React from 'react'
import Task from '../task/task.js'
import './taskListStyle.css'

const TaskList = ({list, click}) => {
  return (
    <div className = "TaskList">
      <br/><hr/>
      <div>
        {list.map(it => 
          <Task
            props = {it}
            click = {click}  
          />
        )}
      </div>
      <br/><hr/>
    </div>
  )
}

export default TaskList