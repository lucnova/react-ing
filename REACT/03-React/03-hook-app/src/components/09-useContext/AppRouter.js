import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

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
						<Route exact path="/home" component={HomePage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/" component={HomePage} />
					</Switch>
				</div>
			</Router>
		</>
	);
};
