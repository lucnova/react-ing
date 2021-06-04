import React from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';

// * Recibe:
// *    publisher: Es el nombre de la compañia a la que pertenece.
// * Se filtran los datos de los heroes en busca de los heroes con ese publisher y se muestran.

export const HeroesList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);

	return (
		<ul>
			{heroes.map((hero) => {
				return <li key={hero.id}>{hero.superhero}</li>;
			})}
		</ul>
	);
};
