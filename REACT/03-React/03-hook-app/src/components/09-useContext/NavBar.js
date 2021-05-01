import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
			<Link to="/" className="navbar-brand">
				UseContext
			</Link>

			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<NavLink to="/home" className="nav-item nav-link" activeClassName="active">
						Home
					</NavLink>
					<NavLink to="/about" className="nav-item nav-link" activeClassName="active">
						About
					</NavLink>
					<NavLink to="/login" className="nav-item nav-link" activeClassName="active">
						Login
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};
