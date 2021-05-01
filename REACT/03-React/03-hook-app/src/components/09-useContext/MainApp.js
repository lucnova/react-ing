import React from 'react';

export const MainApp = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
				<h2 className="navbar-brand">Navbar</h2>

				<div className="collapse navbar-collapse pt-3">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<p className="nav-link" href="#">
								Home
							</p>
						</li>
						<li className="nav-item">
							<p className="nav-link" href="#">
								Link
							</p>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
