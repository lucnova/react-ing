import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-useFetch/MultipleCustomHooks';

export const RealUseRefCase = () => {
	const [showQuotes, setShowQuotes] = useState(false);

	const handleQuoteToggle = () => {
		setShowQuotes(!showQuotes);
	};

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>RealUseRefCase</h1>

					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col mb-2 px-5">
					<button className="btn btn-success" onClick={handleQuoteToggle}>
						Mostrar / Ocultar
					</button>
				</div>
			</div>

			{showQuotes && (
				<div className="row">
					<div className="col">
						<MultipleCustomHooks></MultipleCustomHooks>
					</div>
				</div>
			)}
		</>
	);
};
