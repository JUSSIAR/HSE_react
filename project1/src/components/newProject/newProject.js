import React from 'react';
import InputNewName from '../input/inputName.js';
import MyButton from '../button/button.js';
import './newProjectStyle.scss';

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

const NewProject = connect(mapStateToProps, mapDispatchToProps)(NewProjectComp);
export default NewProject;