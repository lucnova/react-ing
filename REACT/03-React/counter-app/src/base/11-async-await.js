export const fetchAndShowGIF = async (searchTerm) => {
    const apiKey = 'VXAD1LH05QB9';
    const url = `https://api.tenor.com/v1/random?key=${apiKey}&q=${searchTerm}&limit=1`;
    
	try {
		const myTenorFetchResponse = await fetch(url);
		const jsonResponse = await myTenorFetchResponse.json();

		const { results } = jsonResponse;

		for (const currentSearchResult of results) {
			const gifURL = currentSearchResult.media[0].loopedmp4.url;
			return gifURL;
		}
	} catch (error) {
		return error;
	}
};
