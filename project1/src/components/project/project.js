import React from 'react';
import './projectStyle.scss';

import GWLine from '../gwLine/gwLine.js';
import TaskList from '../taskList/taskList.js';
import NewCase from '../newCase/newCase.js';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Project extends React.Component {
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
    const { projectId } = this.props.match.params;
    return (
      <React.StrictMode>
        <div id = "header1">
          <h1>
            ToDoList
          </h1>
        </div>
        <GWLine/>
        <TaskList
          projectIdx = {projectId}
        />
        <GWLine/>
        <NewCase
          props = {this.state.form}
          changeName = {this.changeNewName}
          changeDescription = {this.changeNewDescription}
        />
        <br/>
        <Link to="/" className="linkToHome"> На главную </Link>
        <br/>
      </React.StrictMode>
    );
  }
}

export default withRouter(Project);
