import { useState } from 'react';

// CUSTOM HOOK Contador
// Este custom hook extrae la lógica del contador anterior.

export const useCounter = (initialState = 0) => {
	const [count, setCount] = useState(initialState);

	const increment = (step) => {
		setCount(count + step);
	};

	const decrement = (step) => {
		setCount(count - step);
	};

	const reset = () => {
		setCount(initialState);
	};

	// El Custom Hook retorna:
	return {
		count,
		increment,
		decrement,
		reset,
	};
};
