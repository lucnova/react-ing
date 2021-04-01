import { useEffect, useState } from 'react';

const loadingState = {
	data: null,
	loading: true,
	error: null,
};

export const useFetch = (url = '') => {
	const [state, setState] = useState(loadingState);

	const sendRequest = () => {
		setState(loadingState);

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
	};

	useEffect(() => {
		sendRequest();
	}, [url]);

	return [state, sendRequest];
};
