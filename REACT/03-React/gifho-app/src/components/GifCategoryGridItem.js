import React from 'react';

export const GifCategoryGridItem = (props) => {
	console.log(props);

	return (
		<div>
			<p>{props.title}</p>
			<img src={props.url} alt={props.title}></img>
		</div>
	);
};
