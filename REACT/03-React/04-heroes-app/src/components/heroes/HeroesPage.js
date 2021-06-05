import React from 'react';
import { useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroById';

export const HeroesPage = () => {
	const { heroID } = useParams();
	const { id, superhero, first_appearance, alter_ego, characters } = getHeroById(heroID);

	return (
		<>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img src={`../assets/heroes/${id}.jpg`} alt={`${id}`} style={{ maxHeight: 512 }} className="rounded shadow" loading="lazy" />
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">{superhero}</h1>
						<p className="lead">
							<span className="fw-bold">Alter Ego: </span>
							{alter_ego}
							<br />
							<span className="fw-bold">First Appearance: </span>
							{first_appearance}
							<br />
							<span className="fw-bold">Characters: </span>
                            {characters}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
