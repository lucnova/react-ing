import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from './NavBar';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const AppRouter = () => {
	// * El Switch devuelve lo primero que se indique; si pones Route path='/', no importa si te dirijes a /about;
	//       coinciden el / y es suficiente para el Switch,
	//      Para hacerlo exacto, colocar 'exact' como propiedad.
	return (
		<>
			<Router>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/home" component={HomePage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/about" component={AboutPage} />

						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		</>
	);
};
