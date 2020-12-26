import React from 'react';
import InputNewName from '../input/inputName.js';
import InputNewDesciption from '../input/inputDescription.js';
import MyButton from '../button/button.js';
import './newCaseStyle.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { actionPushNewItem } from '../../actions/pushNewItem';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnPushNewItem: (projectId, item) => dispatch(actionPushNewItem(projectId, item))
});

const NewCaseComp = ({
  index,
  props, 
  changeName, 
  changeDescription,
  dispatchOnPushNewItem
}) => {

  const click = () => {
    dispatchOnPushNewItem(Number(index), props);
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

NewCaseComp.propTypes = {

  index: PropTypes.number.isRequired,
  props: PropTypes.shape({

    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.oneOfType([

      PropTypes.number,
      PropTypes.bool

    ])

  }).isRequired, 
  changeName: PropTypes.func.isRequired, 
  changeDescription: PropTypes.func.isRequired,
  dispatchOnPushNewItem: PropTypes.func.isRequired

};

const NewCase = connect(mapStateToProps, mapDispatchToProps)(NewCaseComp);

export default NewCase;