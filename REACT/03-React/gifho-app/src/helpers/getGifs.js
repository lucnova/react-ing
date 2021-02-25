export const getGifs = async (categoryName) => {
	let sanitizedSearchTerm = encodeURI(categoryName);

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

		return gifsData;
	} catch (error) {
		return error;
	}
};
