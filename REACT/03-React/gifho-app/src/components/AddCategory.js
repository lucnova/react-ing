import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState(''); // Si se deja vacio, el valor es undefined y handleChange Colapsa

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const trimmedValue = inputValue.trim();

		if (trimmedValue.length > 2) {
			setCategories((currCategories) => {
				if (currCategories.findIndex((item) => item === trimmedValue) === -1) {
					setInputValue(''); // Limpiar Input
					return [trimmedValue, ...currCategories];
				} else {
					return currCategories;
				}
			});
		}
	};

	return (
		<>
			<p id="inputValueCheck" hidden>{inputValue}</p>

			<form onSubmit={handleSubmit}>
				<input type="text" value={inputValue} placeholder="s e a r c h" onChange={handleInputChange}></input>
				<button>o k</button>
			</form>
		</>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
