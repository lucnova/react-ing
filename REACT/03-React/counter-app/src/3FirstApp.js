import React from 'react';

/**
 * PROPIEDADES:
 *      props -> Se usan para enviar información a componentes
 */

const FirstApp = ({ title = 'Eu te amo', description = 'macaquinho chupando pirulito azul' }) => {
	const imgSrc = 'https://pbs.twimg.com/media/EqNM6G3XYAAUe14.jpg';

	console.log(title, description);

	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<img src={imgSrc} alt={description}></img>
			<h1 className="desc">{title}</h1>
		</>
	);
};

export default FirstApp;
