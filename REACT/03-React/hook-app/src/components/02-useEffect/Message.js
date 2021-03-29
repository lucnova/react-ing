import React, { useEffect } from 'react';

export const Message = () => {
	useEffect(() => {
		console.log('* Message Component Mounted *');

        // useEffect -> Este return es para una funcion que se ejecutará cuando el componente se desmonta. Útil para limpieza
		return () => {
			console.log('* Message Component Un-Mounted *');
		};
	}, []);

	return (
		<>
			<h3>Hello There.</h3>
		</>
	);
};
