import { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
//import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {
	//const { count, increment } = useCounter(1);
	//const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);
	const [fetchState, sendRequest] = useFetch(`https://www.breakingbadapi.com/api/quote/random`);

	const { data } = fetchState;
	const { quote } = !!data && data[0]; // Si  data es null, se niega doble vez para hacerlo 'false', si es otra cosa es true; ya puedo acceder a data[0].

	const quoteTag = useRef();

	const handleQuoteChange = () => {
		sendRequest();
	};

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		console.log('* useLayoutEffect Triggered *');

		setBoxSize(quoteTag.current.getBoundingClientRect());

		return () => {};
	}, [quote]);

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>LayoutEffect</h1>

					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col p-5">
					<div className="alert alert-info text-center">
						<figure>
							<blockquote className="blockquote">
								<p ref={quoteTag}>{quote}</p>
							</blockquote>
						</figure>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col p-5">
					<pre>{JSON.stringify(boxSize, null, 4)}</pre>
				</div>
			</div>

			<div className="row">
				<div className="col p-5">
					<button className="btn btn-primary" onClick={handleQuoteChange}>
						Siguiente -&gt;
					</button>
				</div>
			</div>
		</>
	);
};
