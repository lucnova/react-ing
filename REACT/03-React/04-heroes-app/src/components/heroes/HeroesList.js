import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

// * Recibe:
// *    publisher: Es el nombre de la compañia a la que pertenece.
// * Se filtran los datos de los heroes en busca de los heroes con ese publisher y se muestran.

export const HeroesList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className="row row-cols-1 row-cols-md-4 g-4 my-3">
			{heroes.map((hero) => {
				return <HeroCard key={hero.id} {...hero} />;
			})}
		</div>
	);
};
