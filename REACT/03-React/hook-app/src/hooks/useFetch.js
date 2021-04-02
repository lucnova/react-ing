import { useEffect, useRef, useState } from 'react';

const loadingState = {
	data: null,
	loading: true,
	error: null,
};

export const useFetch = (url = '') => {
	const quotesMounted = useRef(true); // Mantendra la referencia cuando el componente esta 'vivo'
    // * USAR useRef EN ESTE CASO PREVEENDRA QUE SI SE ACTUALIZA LA PAGINA O SE CANCELA LA CARGA NO DE UN ERROR AL QUERER ASIGNAR ALGO A UN COMPONENTE INEXISTENTE.
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
	};

	// PONER EFECTO QUE SOLO SE EJECUTA AL INICIO
	useEffect(() => {
		return () => {
			quotesMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState(loadingState);

		fetch(url)
			.then((response) => response.json())
			.then((JSONData) => {
				if (quotesMounted.current) {
					setState({
						data: JSONData,
						error: null,
						loading: false,
					});
				}
			})
			.catch((e) => {
				console.error(e);
			});

		return () => {
			//cleanup
		};
	}, [url]);

	return [state, sendRequest];
};
