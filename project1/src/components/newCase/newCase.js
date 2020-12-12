import React from 'react';
import InputNewName from '../input/inputName.js';
import InputNewDesciption from '../input/inputDescription.js';
import MyButton from '../button/button.js';
import './newCaseStyle.scss';

import { connect } from 'react-redux';

import { actionPushNewItem } from '../../actions/pushNewItem';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnPushNewItem: (projectId, item) => dispatch(actionPushNewItem(projectId, item))
});

const NewCaseComp = ({
  props, 
  changeName, 
  changeDescription,
  dispatchOnPushNewItem
}) => {

  const click = () => {
    dispatchOnPushNewItem(props);
  }

  return (
    <div className = "newCase">
      <fieldset title = "Добавление нового задания">
      <legend> <h3>Creating Form</h3> </legend>
      <InputNewName
        value = {props.name}
        onChange = {changeName}
      />
      <InputNewDesciption
        value = {props.description}
        onChange = {changeDescription}
      />
      <MyButton 
        onClick = {click}
        taskId = {undefined}
        value = "Push a new case!"
      />
      </fieldset>
    </div>
  )
}

const NewCase = connect(mapStateToProps, mapDispatchToProps)(NewCaseComp);
export default NewCase;