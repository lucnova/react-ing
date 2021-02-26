import React from 'react';

export const GifCategoryGridItem = (props) => {
	return (
		<div className="card animate__animated animate__bounceIn">
			<img src={props.url} alt={props.title}></img>
			<a href={props.title} target="_blank" rel="noreferrer">{props.title}</a>
		</div>
	);
};
