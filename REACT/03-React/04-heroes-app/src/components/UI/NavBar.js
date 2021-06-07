import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					HEROES
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" exact to="/marvel">
								Marvel
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" exact to="/dc">
								DC
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" exact to="/search">
								<i className="fas fa-search"></i>
							</NavLink>
						</li>
					</ul>
					<div className="d-flex">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle align-items-center hidden-arrow mx-5"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span>User</span>{' '}
								<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-circle" height={25} alt="" loading="lazy" />
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li>
									<NavLink activeClassName="active" className="dropdown-item" exact to="/login">
										Login
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
