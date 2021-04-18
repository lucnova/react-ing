import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({
		x: 0,
		y: 0,
	});

	const { x, y } = coords;

	useEffect(() => {
		console.log('* Message Component Mounted *');

		const showCoords = (e) => {
			const coords = { x: e.x, y: e.y };

			setCoords(coords);
		};

		// EJEMPLO DE LIMPIEZA: Si no se limpia el siguiente evento entonces la memoria será consumida; el addEventListener es agregado N cantidad de veces
		window.addEventListener('mousemove', showCoords);

		// useEffect -> Este return es para una funcion que se ejecutará cuando el componente se desmonta. Útil para limpieza
		return () => {
			console.log('* Message Component Un-Mounted *');
			window.removeEventListener('mousemove', showCoords);
		};
	}, []);

	return (
		<>
			<h3>I know where you are 👀</h3>
			<p>
				x: {x}, y: {y}
			</p>
		</>
	);
};
