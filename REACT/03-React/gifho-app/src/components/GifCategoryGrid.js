import React /*  useState, useEffect */ from 'react'; // useEffect -> Ejecutar código de manera condicional
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { GifCategoryGridItem } from './GifCategoryGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifCategoryGrid = ({ categoryName }) => {
	// const [imgs, setImgs] = useState([]);
	const {loading, data} = useFetchGifs();

	console.log(loading);

	//  - USE EFECT -
	//      Evita renderizar todo el código de nuevo para cuando hay cambios pequeños
	//      -> (callback, lista de dependencias)
	//  Si se manda vacia la lista de dependencias entonces solo se ejecuta 1 vez
	// useEffect(() => {
	// 	getGifs(categoryName)
	// 		.then(setImgs)
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, [categoryName]); // El arreglo contiene variables de las cuales useEffect se ejecutará denuevo

	return (
		<>
			<h3>{categoryName}</h3>
			{/* <div className="card-grid">
				{imgs.map((img) => (
					<GifCategoryGridItem key={img.id} {...img} />
				))}
			</div> */}
			{loading ? 'Loading...' : 'DONE'}
		</>
	);
};

GifCategoryGrid.propTypes = {
	categoryName: PropTypes.string.isRequired,
};

export default GifCategoryGrid;
