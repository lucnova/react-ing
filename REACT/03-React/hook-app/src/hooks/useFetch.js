import { useEffect, useState } from 'react';

export const useFetch = (url = '') => {
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((JSONData) => {
				setState({
					data: JSONData,
                    error: null,
					loading: false,
				});
			})
			.catch((e) => {
				console.error(e);
			});

		return () => {
			//cleanup
		};
	}, [url]);

	return state;
};
