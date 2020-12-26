import React from 'react';
import './taskStyle.scss';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './taskStyleCompl.module.scss';

import MyButton from '../button/button.js';
import logo from '../../images/orig.png';

const cx = classNames.bind(styles);

const DONE = "Done";
const PROGR = "InProgress";

const Task = ({
  props,
  click,
  onClick,
  projectId
}) => {
  const STYLE = ((props.completed === 1) 
    ? DONE
    : PROGR
  );
  return (
    <div className = {
      // (props.completed === 1) ? "taskDone" : "taskInProgress"
      // cx("task", 
      //   {`task${DONE}` : props.completed === 1},
      //   {`task${PROGR}` : props.completed === 0}
      // )
      cx("task", `task${STYLE}`)
    }>
      <img 
        id="ready"
        src={logo}
        width="20px"
        height="20px"
        onClick={() => onClick(projectId, props.id)}
      />
      <div className = "block1">
        <h2 className = "header2"> {props.name} </h2>
        <p className = "description"> {props.description} </p>
      </div>
      <div className = "block2">
        <p className = "status"> {(props.completed === 0) ? "In progress..." : "Done"} </p>
        <MyButton 
          onClick = {click}
          projectId = {projectId}
          taskId = {props.id}
          value = "Change status"
        />
      </div>
    </div>
  )
}

Task.propTypes = {

  props: PropTypes.shape({

    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.oneOfType([

      PropTypes.number,
      PropTypes.bool

    ]).isRequired,
  }).isRequired,
  click: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  projectId : PropTypes.number.isRequired

};

export default Task;
