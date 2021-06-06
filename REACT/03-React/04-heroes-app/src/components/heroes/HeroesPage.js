import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroById';

export const HeroesPage = ({ history }) => {
	const { heroID } = useParams();

	// * En caso de que el ID sea uno que no exista entonces redirigo a /
	const searchedHero = useMemo(() => getHeroById(heroID), [heroID]);
	if (!searchedHero) {
		return <Redirect to="/" />;
	}

	const { id, superhero, first_appearance, alter_ego, characters, publisher } = searchedHero;

	const handleRedirect = () => {
		if (history.length <= 2) {
			history.push('/');
		} else {
			history.goBack();
		}
	};

	return (
		<>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img
							src={`../assets/heroes/${id}.jpg`}
							alt={`${id}`}
							style={{ maxHeight: 512 }}
							className="rounded shadow-lg"
							loading="lazy"
						/>
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

						<button className="btn btn-large btn-primary" onClick={handleRedirect}>
							<i className="fas fa-arrow-left"></i> Return
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
