import React from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import InputLogin from '../input/inputLogin';
import InputPassword from '../input/inputPassword';
import MyButton from '../button/button';
import GWLine from '../gwLine/gwLine';

import './signInStyle.scss';
import { signIn } from '../../client-server/request';

class PersonLoggerAuth {
	static Log(_login, _password) {
		console.log('Authorization');
		console.info(`Login: ${_login}`);
		console.info(`Password: ${_password}`);
		//alert('Auth');
	}
}

class SignIn extends React.Component {
	state = {
		login: "",
		password: "" 
	}
	click = () => {
		PersonLoggerAuth.Log(this.state.login, this.state.password);
		signIn(this.state.login, this.state.password).then((data) => {
			const myStorage = window.localStorage;
			myStorage.setItem("token", data.token);
			myStorage.setItem("login", this.state.login);
			this.props.history.push('/');
			//console.log(data);
		})
	}
	changeLogin = (event) => {
		const { value } = event.target;
		this.setState((old) => ({
			login: value,
			password: old.password
		}))
	}
	changePassword = (event) => {
		const { value } = event.target;
		this.setState((old) => ({
			login: old.login,
			password: value
		}))
	}
	render() {
		return (
			<React.StrictMode>
				<div id="authHeader">
					<h1> Sign IN </h1>
				</div>
				<GWLine/>
				<div className = "auth">
					<fieldset title = "Авторизация">
						<legend> <h3>Авторизация</h3> </legend>
						<InputLogin
							value = {this.state.login}
							onChange = {this.changeLogin}
						/>
						<InputPassword
							value = {this.state.password}
							onChange = {this.changePassword}
						/>
						<MyButton 
							onClick = {this.click}
							taskId = {undefined}
							value = "Войти"
						/>
						</fieldset>
					</div>
				<br/><br/><br/>
				<Link to="/" className="linkToHome"> На главную </Link>
				<br/>
				</React.StrictMode>
		);
	}
}

export default withRouter(SignIn);