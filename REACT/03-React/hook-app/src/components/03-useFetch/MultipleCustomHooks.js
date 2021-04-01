import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const state = useFetch('https://www.breakingbadapi.com/api/quote/random');

	console.log(state);

	const { data, error, loading } = state;

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
									<p>{data[0].quote}</p>
								</blockquote>
								<figcaption className="blockquote-footer">
									{data[0].author} in <cite title="Source Title">{data[0].series}</cite>
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
