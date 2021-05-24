import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DCPage } from '../components/DC/DCPage';
import { MarvelPage } from '../components/MARVEL/MarvelPage';
import { NavBar } from '../components/UI/NavBar';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />

				<Switch>
					<Route exact path="/dc" component={DCPage} />
					<Route exact path="/marvel" component={MarvelPage} />
				</Switch>
			</div>
		</Router>
	);
};
