import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
	console.log('* ShowIncrement Re-Rendered');
	return (
		<button className="btn btn-primary" onClick={() => increment(10)}>
			Increment
		</button>
	);
});
