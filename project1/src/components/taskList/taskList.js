import React from 'react';
import Task from '../task/task.js';
import './taskListStyle.scss';

import { connect } from 'react-redux';

import { actionChangeStatus } from "../../actions/changeStatus";
import { actionEraseTask } from "../../actions/eraseTask";

const mapStateToProps = (state) => ({
  list : state.list.list
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnChangeStatus: (id) => dispatch(actionChangeStatus(id)),
  dispatchOnEraseTask: (id) => dispatch(actionEraseTask(id))
})

const TaskListComp = ({
  list,
  dispatchOnChangeStatus,
  dispatchOnEraseTask
}) => {

  const eraseTask = (id) => {
    dispatchOnEraseTask(id);
  }

  const changeStatus = (id) => {
    dispatchOnChangeStatus(id);
  }

  return (
    <>
      <div>
        <br/>
        <hr/>
      </div>
      <div className = "TaskList">
        <div>
          {(list.length !== 0)
            ? list.map(it => 
                <Task
                  props = {it}
                  click = {changeStatus}
                  onClick = {eraseTask}
                />
              )
            : <h3> No any tasks... </h3>
          }
        </div>
      </div>
      <div>
        <br/>
        <hr/>
      </div>
    </>
  )
}

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComp);
export default TaskList;
