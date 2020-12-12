import React from 'react';
import Task from '../task/task.js';
import './taskListStyle.scss';

import { connect } from 'react-redux';

import { actionChangeStatus } from "../../actions/changeStatus";
import { actionEraseTask } from "../../actions/eraseTask";

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnChangeStatus: (projectId, taskId) => dispatch(actionChangeStatus(projectId, taskId)),
  dispatchOnEraseTask: (projectId, taskId) => dispatch(actionEraseTask(projectId, taskId))
})

const TaskListComp = ({
  projectIdx,
  projects,
  dispatchOnChangeStatus,
  dispatchOnEraseTask
}) => {

  const eraseTask = (projectId, taskId) => {
    dispatchOnEraseTask(projectId, taskId);
  }

  const changeStatus = (projectId, taskId) => {
    dispatchOnChangeStatus(projectId, taskId);
  }

  const index = projects.findIndex((proj) => (proj.projectId === Number(projectIdx)));
  return (
    <React.StrictMode>
      <div className = "TaskList">
        <div>
          {(index !== -1 && projects[index].tasks.length > 0)
            ? projects[index].tasks.map(it =>
              <Task
                props = {it}
                click = {changeStatus}
                onClick = {eraseTask}
                projectId = {Number(projectIdx)}
              />
            )
            : <h3> No any tasks... </h3>
           }
        </div>
      </div>
    </React.StrictMode>
  )
}

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComp);
export default TaskList;
