import React from "react";

const FirstApp = () => {
	const title = "Eu te amo";
	// - Colocar expresiones de JS en JSX -
	// Son igual que en Angular y que en template strings (sin el '$') y tambien tiene
	// excepciones..
	const numberVal = 120;
	const booleanVal = false; // -> No lo imprime
	const arrayVal = [8, 16, 32, 64, 128]; // Parsea cada elemento, aparecen juntos pero los separa en HTML
	const objVal = {
		paulState: "isNotDead",
	}; // No se pueden imprimir directamente. (como en C++ que no puedes poner un dato tal cual en consola)
	// Usar: JSON.stringify( obj, optns? )

	const imgSrc = "https://pbs.twimg.com/media/EqNM6G3XYAAUe14.jpg";

	return (
		<>
			<h1>{title}</h1>
			<pre>{JSON.stringify(objVal, null, '    ')}</pre>
			<p>macaquinho chupando pirulito azul</p>
			<img src={imgSrc} alt="macaquinho chupando pirulito azul"></img>
			<h1 className="desc">{title}</h1>
		</>
	);
};

export default FirstApp;
