import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ title, description, aBoolean }) => {
	const imgSrc = 'https://pbs.twimg.com/media/EqNM6G3XYAAUe14.jpg';
	//const imgSrc = 'https://instagram.fgdl1-3.fna.fbcdn.net/v/t51.2885-15/e35/146082774_1379663119035761_1060428450675773640_n.jpg?_nc_ht=instagram.fgdl1-3.fna.fbcdn.net&_nc_cat=105&_nc_ohc=VCD0ubqCuIMAX9wEbpz&tp=1&oh=d4a070cce29f651cea031e585bc7525e&oe=604673A6';

	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<img src={imgSrc} alt={description}></img>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	aBoolean: PropTypes.bool,
};

/* VALORES POR DEFECTO */
FirstApp.defaultProps = {
	aBoolean: true,
};

export default FirstApp;
