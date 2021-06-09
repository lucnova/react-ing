import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    // * Obtener el contexto (que viene de HeroesApp.js => <AuthContext.Provider value={{ authUser, authDispatch }}></AuthContext.Provider>)
	const { authUser } = useContext(AuthContext);   // solo extraigo el usuario.

	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={LoginPage} />

				<PrivateRoute isAuth={authUser.logged} path="/" component={DashboardRoutes} />
			</Switch>
		</Router>
	);
};
