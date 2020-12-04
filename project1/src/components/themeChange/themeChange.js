import React from 'react';
import './themeChangeStyle.scss';

import { connect } from "react-redux";
import { themeChange } from "../../actions/theme";

import { defaultTheme, winterTheme } from '../../data/themes';

const mapStateToProps = (state) => ({
  theme: state.theme.theme
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(themeChange(theme))
});

class Themes extends React.Component {

  changeTheme = (event) => {
    this.props.dispatchOnThemeChange(event.target.value);
  }

  render() {  
    return (
      <div className = "themes">
        <label> Theme </label>
        <select value={this.props.theme} onChange={this.changeTheme}>
          <option value={defaultTheme}> Default </option>
          <option value={winterTheme}> Winter </option>
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
