import React from 'react';
import PropTypes from 'prop-types';

export const GifCategoryGridItem = ({ url, title }) => {
	return (
		<div className="card animate__animated animate__bounceIn">
			<img src={url} alt={title}></img>
			<p>{title}</p>
		</div>
	);
};

GifCategoryGridItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
