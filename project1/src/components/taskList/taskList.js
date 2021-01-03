import React from 'react';
import Task from '../task/task.js';
import './taskListStyle.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { actionChangeStatus } from "../../actions/changeStatus";
import { actionEraseTask } from "../../actions/eraseTask";
import { actionLoadTasks } from '../../actions/loadTasks.js';

import { changeTaskStatus } from '../../client-server/request';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

const mapDispatchToProps = (dispatch) => ({
  //dispatchOnChangeStatus: (projectId, taskId) => dispatch(actionChangeStatus(projectId, taskId)),
  //dispatchOnEraseTask: (projectId, taskId) => dispatch(actionEraseTask(projectId, taskId)),
  fetchTasks : (projectId) => dispatch(actionLoadTasks(projectId))
})

const TaskListComp = ({
  projectIdx,
  projects,
  //dispatchOnChangeStatus,
  //dispatchOnEraseTask,
  fetchTasks
}) => {

  const index = projects.findIndex((proj) => (proj.projectId === Number(projectIdx)));

  const eraseTask = (projectId, taskId) => {
    //dispatchOnEraseTask(projectId, taskId);
    alert("Unfortunatelly, it doesn't work now...");
  }

  const changeStatus = (projectId, taskId) => {
    //dispatchOnChangeStatus(projectId, taskId);

    const projectIndexInArr = index;
    const taskIndexInArr = projects[index].tasks.findIndex((task) => (task.id === Number(taskId)));

    changeTaskStatus(projectId, taskId, projects[projectIndexInArr].tasks[taskIndexInArr]).then((response) => {
      fetchTasks(projectId);
    })
  }

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

TaskListComp.propTypes = {

  projectIdx: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({

    projectId: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({

      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.oneOfType([

        PropTypes.number,
        PropTypes.bool

      ]).isRequired

    })).isRequired

  })).isRequired,
  dispatchOnChangeStatus: PropTypes.func.isRequired,
  dispatchOnEraseTask: PropTypes.func.isRequired

};

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComp);

export default TaskList;
