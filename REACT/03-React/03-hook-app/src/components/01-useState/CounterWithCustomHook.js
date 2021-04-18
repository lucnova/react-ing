import React from 'react';
import { useCounter } from '../../hooks/useCounter';

// HOOK: Custom Hook => Para cuando quieres hacer una abstraccion de una pieza de código que se puede reusar
// en otras partes

export const CounterWithCustomHook = () => {
	const { count, increment, decrement, reset } = useCounter();

	return (
		<>
			<div className="row">
				<div className="col text-center">
					<h1>Counter {count}</h1>
					<hr />

					<button className="btn btn-danger" onClick={() => decrement(10)}>
						-10
					</button>
					<button className="btn btn-success" onClick={reset}>
						Reset
					</button>
					<button className="btn btn-primary" onClick={() => increment(10)}>
						+10
					</button>
				</div>
			</div>
		</>
	);
};
