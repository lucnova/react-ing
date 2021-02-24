import React, { useState, useEffect } from 'react'; // useEffect -> Ejecutar código de manera condicional
import PropTypes from 'prop-types';
import { GifCategoryGridItem } from './GifCategoryGridItem';

const GifCategoryGrid = ({ categoryName }) => {
	const [imgs, setImgs] = useState([]);

	//  - USE EFECT -
	//      Evita renderizar todo el código de nuevo para cuando hay cambios pequeños
	//      -> (callback, lista de dependencias)
	//  Si se manda vacia la lista de dependencias entonces solo se ejecuta 1 vez
	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async (searchTerm = 'DDLC') => {
		let sanitizedSearchTerm = searchTerm.trim().replace(' ', '+');

		const apiKey = 'VXAD1LH05QB9';
		const url = `https://g.tenor.com/v1/random?q="${sanitizedSearchTerm}"&contentfilter=off&key=${apiKey}&limit=5`;

		try {
			const myTenorFetchResponse = await fetch(url);
			const jsonResponse = await myTenorFetchResponse.json();

			const { results } = jsonResponse;

			const gifsData = results.map((gifInfo) => {
				return {
					id: gifInfo.id,
					title: gifInfo.url,
					url: gifInfo.media[0].gif.url,
				};
			});

			setImgs(gifsData);
		} catch (error) {
			return error;
		}
	};

	return (
		<div>
			<h3>{categoryName}</h3>
			<div>
				{imgs.map((img) => (
					<GifCategoryGridItem key={img.id} {...img} />
				))}
			</div>
		</div>
	);
};

GifCategoryGrid.propTypes = {
	categoryName: PropTypes.string.isRequired,
};

export default GifCategoryGrid;
