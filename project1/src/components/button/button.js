import React from 'react';
import './buttonStyle.scss';

const MyButton = ({
  onClick,
  projectId,
  taskId,
  value
}) => ((taskId !== undefined)
  ? <button onClick = {() => onClick(projectId, taskId)} className = "Button">
      {value}
    </button>
  : <button onClick = {onClick} className = "Button">
      {value}
    </button>
)

export default MyButton;