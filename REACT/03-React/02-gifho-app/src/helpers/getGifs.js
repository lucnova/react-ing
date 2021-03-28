export const getGifs = async (categoryName) => {
	let sanitizedSearchTerm = encodeURI(categoryName);

	const apiKey = 'VXAD1LH05QB9';
    const limit = 8;
	const url = `https://g.tenor.com/v1/random?q="${sanitizedSearchTerm}"&contentfilter=off&key=${apiKey}&limit=${limit}`;

	try {
		const myTenorFetchResponse = await fetch(url);
		const jsonResponse = await myTenorFetchResponse.json();
        
		if (jsonResponse.error === undefined) {
			const { results } = jsonResponse;
			const gifsData = results.map((gifInfo) => {
				return {
					id: gifInfo.id,
					title: gifInfo.url,
					url: gifInfo.media[0].gif.url,
				};
			});

			return gifsData;
		} else {
			return [jsonResponse.error];
		}
	} catch (error) {
		return error;
	}
};
