import React, { useCallback } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const { count, setCount } = useCounter(0);

    // useCallback se usa para no re-renderizar funciones cuando el componente se redibuje por cambios en su estado
    // A fuerza se usa con memo si memo recibe funciones
	const increment = useCallback((step = 1) => {
		//setCount(count + 1);    // Esto genera una dependencia que tienes que agregar abajo, pero en la app no queremos que dependa del contador;
		//      se re-renderizaria muchas veces.
		setCount((cnt) => cnt + step); // Mandar una funcion a react para que la use (en esa funcion manda la variable de useState)
	}, [setCount]);

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>CallbackHook: {count}</h1>

					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col pt-5 px-5">
					<ShowIncrement increment={increment}></ShowIncrement>
				</div>
			</div>
		</>
	);
};
