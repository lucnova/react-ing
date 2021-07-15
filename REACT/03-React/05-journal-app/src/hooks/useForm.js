/**
 *  USE FORM HOOK
 *      Con este hook puedo manejar campos de un form.
 *      El estado inicial es un objeto donde cada propiedad es un valor de un input
 *
 *      Regresa el estado actual con una funcion para manejar el cambio de un input.
 */

import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues, // Mantener las posibles propiedades anteriores
			[target.name]: target.value, // Poner la nueva propiedad en su valor
		});
	};

	const resetFormValues = () => {
		setFormValues(initialState);
	};

	return [formValues, handleInputChange, resetFormValues]; //Regresa el estado actual con una funcion para manejar el cambio de un input.
};
