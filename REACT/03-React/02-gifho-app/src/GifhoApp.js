import React, { useState } from 'react';
//import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';
import GifCategoryGrid from './components/GifCategoryGrid';

const GifhoApp = ({ defaultCategories = [] }) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<div>
				<h2>Gifho!</h2>
				<small>lucnova</small>
				<hr />
			</div>

			<AddCategory setCategories={setCategories} />

			<div>
				<ol>
					{categories.map((category) => (
						<GifCategoryGrid categoryName={category} key={category} />
					))}
				</ol>
			</div>
		</>
	);
};

//GifhoApp.propTypes = {};

export default GifhoApp;
