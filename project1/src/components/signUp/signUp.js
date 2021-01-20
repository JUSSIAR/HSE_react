import React from 'react';

import { Link } from 'react-router-dom';

import InputLogin from '../input/inputLogin';
import InputPassword from '../input/inputPassword';
import MyButton from '../button/button';
import GWLine from '../gwLine/gwLine';

import './signUpStyle.scss';

class PersonLoggerReg {
	static Log(_login, _password) {
        console.log('Registration');
		console.info(`Login: ${_login}`);
		console.info(`Password: ${_password}`);
		//alert('Reg');
	}
}

class SignIn extends React.Component {
	state = {
		login: "",
		password: "" 
	}
	click = () => {
		PersonLoggerReg.Log(this.state.login, this.state.password);
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
				<div id="regHeader">
					<h1> Sign UP </h1>
				</div>
				<GWLine/>
				<div className = "reg">
					<fieldset title = "Регистрация">
						<legend> <h3>Регистрация</h3> </legend>
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
							value = "Зарегистрироваться"
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

export default SignIn;