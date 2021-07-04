import React from 'react';

export const Sidebar = () => {
	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-moon"></i> lucnova
				</h3>

				<button className="btn">Cerrar Sesión</button>
			</div>

			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5 mb-5">
                    Nueva Entrada
                </p>
			</div>
		</aside>
	);
};
