import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
			<Link className="navbar-brand" to="/">
				HEROES
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
						Marvel
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
						DC
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">
						Log-In
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};
