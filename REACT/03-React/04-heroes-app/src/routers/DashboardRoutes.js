import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { NavBar } from '../components/UI/NavBar';
import { Footer } from '../components/UI/Footer';
import { HeroesPage } from '../components/heroes/HeroesPage';
import { MarvelPage } from '../components/MARVEL/MarvelPage';
import { DCPage } from '../components/DC/DCPage';
import { SearchPage } from '../components/search/SearchPage';

export const DashboardRoutes = () => {
	return (
		<>
			<NavBar />

			<div className="container mt-2">
				<Switch>
					<Route exact path="/dc" component={DCPage} />
					<Route exact path="/marvel" component={MarvelPage} />
					<Route exact path="/hero/:heroID" component={HeroesPage} />
                    <Route exact path="/search" component={SearchPage} />

					<Redirect to="/marvel" />
				</Switch>
			</div>

			<Footer />
		</>
	);
};
