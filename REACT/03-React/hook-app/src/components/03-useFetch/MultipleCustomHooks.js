import { useFetch } from '../../hooks/useFetch';
//import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
	//const { count, increment } = useCounter(1);
	//const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);
	const [fetchState, sendRequest] = useFetch(`https://www.breakingbadapi.com/api/quote/random`);

	const { data, error, loading } = fetchState;
	const { author, quote, series } = !!data && data[0]; // Si  data es null, se niega doble vez para hacerlo 'false', si es otra cosa es true; ya puedo acceder a data[0].

	const handleQuoteChange = () => {
		sendRequest();
	};

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>MultiHooks</h1>

					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col p-5">
					{loading === true && (
						<div className="alert alert-info text-center">
							<div className="spinner-border">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					)}

					{loading === false && error === null && (
						<div className="alert alert-info text-center">
							<figure>
								<blockquote className="blockquote">
									<p>{quote}</p>
								</blockquote>
								<figcaption className="blockquote-footer">
									{author} in <cite title="Source Title">{series}</cite>
								</figcaption>
							</figure>
						</div>
					)}

					{loading === false && error !== null && (
						<div className="alert alert-warning text-center">
							<p>ERROR: Read the console for more info.</p>
						</div>
					)}
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
