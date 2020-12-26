import React from 'react';
import InputNewName from '../input/inputName.js';
import MyButton from '../button/button.js';
import './newProjectStyle.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { actionPushNewProject } from '../../actions/pushNewProject';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnPushNewProject: (project) => dispatch(actionPushNewProject(project))
});

const NewProjectComp = ({
  projectName, 
  changeName, 
  dispatchOnPushNewProject
}) => {

  const click = () => {
    dispatchOnPushNewProject(projectName);
  }

  return (
    <div className = "newProject">
      <fieldset title = "Добавление нового проекта">
      <legend> <h3>Creating Form</h3> </legend>
      <InputNewName
        value = {projectName}
        onChange = {changeName}
      />
      <MyButton 
        onClick = {click}
        taskId = {undefined}
        value = "Push a new project!"
      />
      </fieldset>
    </div>
  )
}

NewProjectComp.propTypes = {

  projectName: PropTypes.string, 
  changeName: PropTypes.func.isRequired, 
  dispatchOnPushNewProject: PropTypes.func.isRequired

};

NewProjectComp.defaultProps = {

  projectName: "NoName"

};

const NewProject = connect(mapStateToProps, mapDispatchToProps)(NewProjectComp);

export default NewProject;