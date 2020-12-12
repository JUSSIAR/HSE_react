import React from 'react';
import GWLine from '../gwLine/gwLine.js';
import { Link } from 'react-router-dom';
import './projectListStyle.scss'

import { connect } from "react-redux";
import NewProject from '../newProject/newProject.js';

const mapStateToProps = (state) => ({
  projects : state.projectList.projectList
});

class ProjectList extends React.Component {
  state = {
    projectName : ""
  }

  changeName = (event) => {
    const { value } = event.target;
    this.setState({
      projectName: value
    })
  }

  render() {
    return (
      <React.StrictMode>
        
        <div id = "projectListHeader">
          <h1>
            My Projects
          </h1>
        </div>

        <GWLine/>

        <div className="projectList">
          <ul>
            {this.props.projects.map(element => (
              <li>
                <Link 
                  to={`/projects/${element.projectId}`}
                  className="linkToProject"
                > 
                  {element.projectName}
                </Link>
                <br/><br/>
              </li>
            ))}
          </ul>
        </div>

        <GWLine/>
        
        <NewProject
          projectName = {this.state.projectName}
          changeName = {this.changeName}
        />

        <br/>
        <Link to="/" className="linkToHome"> На главную </Link>
        <br/>
      </React.StrictMode>
    );
  }
}

export default connect(mapStateToProps)(ProjectList);
