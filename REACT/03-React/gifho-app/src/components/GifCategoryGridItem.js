import React from 'react';

export const GifCategoryGridItem = (props) => {
	return (
		<div className="card">
			<img src={props.url} alt={props.title}></img>
			<p>{props.title}</p>
		</div>
	);
};
