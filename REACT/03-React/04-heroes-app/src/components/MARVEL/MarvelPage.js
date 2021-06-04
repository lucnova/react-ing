import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const MarvelPage = () => {
	return (
		<div>
			<h1>MARVEL PAGE</h1>
			<HeroesList publisher="Marvel Comics"></HeroesList>
		</div>
	);
};
