/**
 * EL CUSTOM HOOK HACE EL LLAMADO DE getGifs
 * 
 *  Hace el trabajo pesado, llama al helper para obtener los datos, los agarra y los reenvia devuelta
 *      con una nota sobre si cargaron o no.
 */
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoryName) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(categoryName)
			.then((imgs) => {
				setState({
					data: imgs,
					loading: false,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}, [categoryName]);

	return state;
};
