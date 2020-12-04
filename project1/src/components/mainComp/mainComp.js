import React from 'react';
import './styles.scss';
import NewCase from '../newCase/newCase.js';
import TaskList from '../taskList/taskList.js';
import Themes from '../themeChange/themeChange.js';

import { GetTasks } from '../../data/data';
import { defaultTheme, winterTheme } from '../../data/themes';

import classNames from 'classnames/bind';
import styles from './themeStyle.module.scss';

import { connect } from "react-redux";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
  theme : state.theme.theme
});

class MainComp extends React.Component {
  state = {
    form : {
      name: "",
      description: "" 
    }
  }

  changeNewName = (event) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        form : {
          ...cur.form,
          name : value
        }
      };
    })
  }

  changeNewDescription = (event) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        form : {
          ...cur.form,
          description : value
        }
      };
    })
  }

  render() {
    const condition = this.props.theme;
    return (
    <div className = {cx("back", 
        {"back-Default" : condition === defaultTheme},
        {"back-Winter" : condition === winterTheme}
    )}>
      <div className = "content">
        <Themes/>
        <div id = "header1">
        <h1> ToDoList </h1>
        </div>
          <TaskList/>
          <NewCase
            props = {this.state.form}
            changeName = {this.changeNewName}
            changeDescription = {this.changeNewDescription}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainComp);
