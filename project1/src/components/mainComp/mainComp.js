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
  theme: state.theme.theme
});

const validator = {
  invalid : (id, taskArr) => {
    if (typeof(id) != "number")
      return true;
    const index = taskArr.findIndex((task) => (task.id === id))
    return ((index === -1) ? undefined : index)
  }
}

class MainComp extends React.Component {
  state = {
    list : GetTasks(),
    form : {
      name: "",
      description: "" 
    }
  }

  changeStatus = (id) => {
    const checked_id = validator.invalid(id, this.state.list)
    if (checked_id === undefined)
      return;
    this.setState(cur => {
      let copy = cur.list.map(it => {
        return {
          id : it.id,
          name : it.name,
          description : it.description,
          completed : it.completed
        };
      })
      const newVal = 1 - copy[checked_id].completed;
      copy[checked_id].completed = newVal;
      return {list : copy};
    })
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

  pushNewItem = () => {
    this.setState(cur => {
      const new_list = [
        ...cur.list,
        { 
          id : cur.list.length,
          name : cur.form.name,
          description : cur.form.description,
          completed : 0
        }
      ];
      return {
        list : new_list
      };
    })
  }

  eraseTask = (id) => {
    this.setState(cur => {
      return {list : cur.list.filter(function(obj) {
        return (obj.id !== id);
      })};
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
          <TaskList
            list = {this.state.list}
            click = {this.changeStatus}
            erase = {this.eraseTask}
          />
          <NewCase
            props = {this.state.form}
            changeName = {this.changeNewName}
            changeDescription = {this.changeNewDescription}
            click = {this.pushNewItem}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainComp);
