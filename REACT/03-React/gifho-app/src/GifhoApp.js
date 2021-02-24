import React, { useState } from 'react';
//import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';

const GifhoApp = (props) => {
	const [categories, setCategories] = useState(['Pixel Art', 'Vinesauce', 'DDLC']);

	return (
		<>
			<div>
				<h2>Gifho!</h2>
				<hr />
			</div>

			<AddCategory setCategories={setCategories} />

			<div>
				<ol>
					{categories.map((category) => {
						return <li key={category}>{category}</li>;
					})}
				</ol>
			</div>
		</>
	);
};

//GifhoApp.propTypes = {};

export default GifhoApp;
