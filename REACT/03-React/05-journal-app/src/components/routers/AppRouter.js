import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/auth" component={AuthRouter} />
				<Route path="/" component={JournalScreen} />
				<Redirect to="/auth/login"></Redirect>
			</Switch>
		</Router>
	);
};
