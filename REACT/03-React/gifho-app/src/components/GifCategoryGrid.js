import React from 'react';
import PropTypes from 'prop-types';

const GifCategoryGrid = ({ categoryName }) => {
	const getGifs = async (searchTerm = 'JoJo') => {
        let sanitizedSearchTerm = searchTerm.trim().replace(' ', '+');
        
		const apiKey = 'VXAD1LH05QB9';
		const url = `https://g.tenor.com/v1/search?q="${sanitizedSearchTerm}"&limit=3&key="${apiKey}"`;

		try {
			const myTenorFetchResponse = await fetch(url);
			const jsonResponse = await myTenorFetchResponse.json();

			const { results } = jsonResponse;
            
            console.log(results);

            /*
			for (const currentSearchResult of results) {
				const gifURL = currentSearchResult.media[0].loopedmp4.url;
				return gifURL;
			}
            */

            const gifsData = results.map((gifInfo) => {
                return {
                    id: gifInfo.id,
                    title: gifInfo.h1_title,
                    url: gifInfo.url,
                }
            });
		} catch (error) {
			return error;
		}
	};

    getGifs();

	return (
		<>
			<h3>{categoryName}</h3>
		</>
	);
};

GifCategoryGrid.propTypes = {
	categoryName: PropTypes.string.isRequired,
};

export default GifCategoryGrid;
