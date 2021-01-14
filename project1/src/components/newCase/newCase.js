import React from 'react';
import InputNewName from '../input/inputName.js';
import InputNewDesciption from '../input/inputDescription.js';
import MyButton from '../button/button.js';
import './newCaseStyle.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { actionPushNewItem } from '../../actions/pushNewItem';
import { actionLoadTasks } from '../../actions/loadTasks';
import { pushTask } from '../../client-server/request';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

const mapDispatchToProps = (dispatch) => ({
  //dispatchOnPushNewItem: (projectId, item) => dispatch(actionPushNewItem(projectId, item)),
  fetchTasks: (projectId) => dispatch(actionLoadTasks(projectId)),
});

class NewCaseComp extends React.Component {

  click = () => {
    //dispatchOnPushNewItem(Number(index), props);
    pushTask(Number(this.props.index), this.props.props).then((response) => {
      this.props.fetchTasks(Number(this.props.index));
    });
  }

  render() {
    return (
      <div className = "newCase">
        <fieldset title = "Добавление нового задания">
        <legend> <h3>Creating Form</h3> </legend>
        <InputNewName
          value = {this.props.props.name}
          onChange = {this.props.changeName}
        />
        <InputNewDesciption
          value = {this.props.props.description}
          onChange = {this.props.changeDescription}
        />
        <MyButton 
          onClick = {this.click}
          taskId = {undefined}
          value = "Push a new case!"
        />
        </fieldset>
      </div>
    )
  }
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

//const NewCase = connect(mapStateToProps, mapDispatchToProps)(NewCaseComp);

export default connect(mapStateToProps, mapDispatchToProps)(NewCaseComp);