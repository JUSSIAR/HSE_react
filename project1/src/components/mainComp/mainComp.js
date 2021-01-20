import React from 'react';
import './styles.scss';

import Themes from '../themeChange/themeChange.js';
import Err404Page from '../err404/err404.js';
import Project from '../project/project.js';
import ProjectList from '../projectList/projectList.js';
import StartPage from '../startPage/startPage.js';
import Info from '../info/info.js';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';

import { defaultTheme, winterTheme } from '../../data/themes';
import classNames from 'classnames/bind';
import styles from './themeStyle.module.scss';

import { connect } from "react-redux";

import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as BrowRout } from "react-router-dom";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
  theme : state.theme.theme
});

class MainComp extends React.Component {
  render() {
    const condition = this.props.theme;
    return (
      <React.StrictMode>
        <div className = {cx("back", 
            {"back-Default" : condition === defaultTheme},
            {"back-Winter" : condition === winterTheme}
        )}>
          <div className = "content">
            <BrowRout>
              <Route path="/" component={Themes} />

              <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/projects" component={ProjectList} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/projects/:projectId(\d+)/" component={Project} />

                <Route exact path="/404" component={Err404Page} />
                <Redirect to="/404" />
              </Switch>

            </BrowRout>
          </div>
        </div>
      </React.StrictMode>
    )
  }
}

export default connect(mapStateToProps)(MainComp);
