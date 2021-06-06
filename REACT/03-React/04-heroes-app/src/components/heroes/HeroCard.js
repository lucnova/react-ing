import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, alter_ego, characters }) => {
	return (
		<div className="col my-3">
			<div className="card shadow">
				<img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={`${id}`} style={{ maxHeight: 512 }} />
				<div className="card-body">
					<h5 className="card-title">{superhero}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{alter_ego}</h6>

					{alter_ego !== characters && <p className="card-text">{characters}</p>}

					<Link to={`./hero/${id}`} className="btn btn-primary">
						<i className="fas fa-info"></i> Details
					</Link>
				</div>
			</div>
		</div>
	);
};
