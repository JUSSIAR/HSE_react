import React from 'react';
import './projectStyle.scss';
import PropTypes from 'prop-types';

import GWLine from '../gwLine/gwLine.js';
import TaskList from '../taskList/taskList.js';
import NewCase from '../newCase/newCase.js';

import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { actionLoadTasks } from '../../actions/loadTasks';
import { actionLoadProjects } from '../../actions/loadProjects';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
})

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: (projectId) => dispatch(actionLoadTasks(projectId)),
  fetchProjects : () => dispatch(actionLoadProjects())
});

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

  componentDidMount() {
    const { projectId } = this.props.match.params;
    this.props.fetchProjects().then((response) => {
      this.props.fetchTasks(Number(projectId));
    });
  }

  render() {
    const { projectId } = this.props.match.params;
    const index = this.props.projects.findIndex(it => (it.projectId === Number(projectId)));
    return (
      <React.StrictMode>
        {(0 <= index && index < this.props.projects.length)
          ? <React.StrictMode>
            <div id = "header1">
              <h1>
                ToDoList {this.props.projects[index].projectName}
              </h1>
            </div>
            <GWLine/>
            <TaskList
              projectIdx = {projectId}
            />
            <GWLine/>
            <NewCase
              index = {projectId}
              props = {this.state.form}
              changeName = {this.changeNewName}
              changeDescription = {this.changeNewDescription}
            />
          </React.StrictMode>
          : <React.StrictMode>
             <div id = "header1">
              <h1>
                ToDoList is Empty
              </h1>
            </div>
            <GWLine/>
            <p className="noProject">
              No any project with id {projectId}
            </p>
            <br/> <br/>
            
          </React.StrictMode>
        }
        <br/>
        <Link to="/" className="linkToHome"> На главную </Link>
        <br/>
      </React.StrictMode>
    );
  }
}

Project.propTypes = {

  projects: PropTypes.arrayOf(PropTypes.shape({

    projectId: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({

      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.oneOfType([

        PropTypes.number,
        PropTypes.bool

      ]).isRequired

    })).isRequired

  })).isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Project));
