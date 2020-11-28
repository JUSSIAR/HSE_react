import React from 'react'
import Task from '../task/task.js'
import './taskListStyle.scss'

const TaskList = ({list, click, erase}) => {
  return (
    <>
    <div><br/><hr/></div>
    <div className = "TaskList">
      <div>
        {(list.length !== 0)
          ? list.map(it => 
              <Task
                props = {it}
                click = {click}
                onClick = {erase}
              />
            )
          : <h3> No any tasks... </h3>
        }
      </div>
    </div>
    <div><br/><hr/></div>
    </>
  )
}

export default TaskList