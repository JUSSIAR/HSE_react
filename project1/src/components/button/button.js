import React from 'react';
import './buttonStyle.scss';
import PropTypes from 'prop-types';

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

MyButton.propTypes = {

  onClick: PropTypes.func.isRequired,
  projectId: PropTypes.number,
  taskId: PropTypes.number,
  value: PropTypes.oneOfType([

    PropTypes.number,
    PropTypes.string

  ]).isRequired

}

MyButton.defaultProps = {

  projectId: 0,
  taskId: 0
  
}

export default MyButton;