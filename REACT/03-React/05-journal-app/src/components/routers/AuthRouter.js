import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../auth/LoginPage';
import { RegisterPage } from '../auth/RegisterPage';

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route path="/auth/login" exact component={LoginPage} />
					<Route path="/auth/register" exact component={RegisterPage} />
					<Redirect to="/auth/login"></Redirect>
				</Switch>
			</div>
		</div>
	);
};
