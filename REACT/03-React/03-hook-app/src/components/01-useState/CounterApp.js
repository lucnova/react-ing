import React, { useState } from 'react';
import './CounterApp.css';

export const CounterApp = () => {
    // HOOK: useState => Define un estado de una variable.
	const [state, setState] = useState({
		firstCounter: 10,
		secondCounter: 20,
        thirdCounter: 30,
	});

    // Como solo haré uso de estas variables, las extraigo
	const { firstCounter, secondCounter } = state;

	return (
		<>
			<div className="row">
				<div className="col text-center">
					<h1>First Counter {firstCounter}</h1>
					<h1>Second Counter {secondCounter}</h1>
					<hr />

					<button
						className="btn btn-primary"
						onClick={() => {
							/* SetState -> Reemplaza el estado anterior por el nuevo estado */
							const newCounter = {
								...state,
								firstCounter: firstCounter + 1,
							};
							setState(newCounter);
						}}
					>
						+1
					</button>
				</div>
			</div>
		</>
	);
};
