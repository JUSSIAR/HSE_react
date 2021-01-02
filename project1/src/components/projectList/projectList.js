import React from 'react';
import GWLine from '../gwLine/gwLine.js';
import { Link } from 'react-router-dom';
import './projectListStyle.scss';
import PropTypes from 'prop-types';

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

  componentDidMount() {
    
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

ProjectList.propTypes = {

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

  }))

}

ProjectList.defaultProps = {

  projects: []
  
}

export default connect(mapStateToProps)(ProjectList);
