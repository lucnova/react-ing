import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Count } from './Count';

export const Memorize = () => {
	const { count, increment } = useCounter(0);

	const [show, setShow] = useState(true);

	// Al hacer click en Mostrar/Ocultar, el componente Count se re-renderiza porque cambia el state del componente Memorize, y por ende redibuja todo
	// (1) Para evitar re-dibujar todo el componente y re-enviar peticiones http inecesarias, entonces se usa MEMO

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>
						Memorize <Count countValue={count}></Count>
					</h1>

					<hr />

					<button className="btn btn-success" onClick={() => increment()}>
						Incrementar
					</button>

					<button className="btn btn-warning" onClick={() => setShow(!show)}>
						Mostrar/Ocultar {show.toString()}
					</button>
				</div>
			</div>
		</>
	);
};
