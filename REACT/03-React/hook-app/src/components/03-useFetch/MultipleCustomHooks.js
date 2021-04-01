import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const state = useFetch('https://www.breakingbadapi.com/api/quote/random');

	console.log(state);

	const { data, error, loading } = state;

	const { author, quote, series } = !!data && data[0];    // Si  data es null, se niega doble vez para hacerlo 'false', si es otra cosa es true; ya puedo acceder a data[0].

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
		</>
	);
};
