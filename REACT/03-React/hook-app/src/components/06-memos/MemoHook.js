import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {
	const { count, increment } = useCounter(200);

	const [show, setShow] = useState(true);

	const memoHeavyProcess = useMemo(() => heavyProcess(count), [count]); // Esto indica que en caso de que si hay un cambio en count entonces SI re-renderizar.

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>
						MemoHook <small>{count}</small>
					</h1>

					<hr />

					<p>{memoHeavyProcess}</p>

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
