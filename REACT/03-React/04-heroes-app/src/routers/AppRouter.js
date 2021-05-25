import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from '../components/UI/NavBar';
import { LoginPage } from '../components/login/LoginPage';
import { DCPage } from '../components/DC/DCPage';
import { MarvelPage } from '../components/MARVEL/MarvelPage';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />

				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/dc" component={DCPage} />
					<Route exact path="/marvel" component={MarvelPage} />
				</Switch>
			</div>
		</Router>
	);
};
