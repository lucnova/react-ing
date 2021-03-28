import React, { useState } from 'react'; // useState -> ES UN HOOK
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
	const [counter, setCounter] = useState(value); // useState trae un arreglo con DOS VALORES [var, hacerAlgo()]

	/* ------------------------------- Handle ADD ------------------------------- */
	const handleAdd = (e) => {
		setCounter(counter + 1); // Settear un valor dado
		//setCounter((el) => el + 1 );    // Funcion callback que el retorno es seteado
	};

	/* ------------------------------- Handle SUB ------------------------------- */
	const handleSubstract = (e) => {
		setCounter(counter - 1);
	};

	/* ------------------------------ Handle Reset ------------------------------ */
	const handleReset = (e) => {
		setCounter(value);
	};

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>

			<button onClick={handleAdd}>+1</button>
			<button onClick={handleSubstract}>-1</button>
			<button onClick={handleReset}>R</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number,
};

export default CounterApp;
