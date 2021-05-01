import React from 'react';

import { useForm } from '../../hooks/useForm';

export const TodoAddModule = ({ handleAddTodo }) => {
	const [{ title, desc }, handleInputChange, resetFormValues] = useForm({
		title: '',
		desc: '',
	});

	// * Validar que los valores del form sean validos
	const inputDataIsValid = () => {
		const trimmedTitle = title.trim();
		const trimmedDesc = desc.trim();

		if (trimmedTitle.length <= 1 || trimmedTitle === '') {
			return false;
		}

		if (trimmedDesc.length <= 1 || trimmedDesc === '') {
			return false;
		}

		return true;
	};

	// * FUNCION PARA MANEJAR EL FORM DE SUBIR UN TODO
	const handleTodoSubmit = (e) => {
		e.preventDefault();

		if (inputDataIsValid()) {
			const trimmedTitle = title.trim();
			const trimmedDesc = desc.trim();

			const newTodo = {
				id: new Date().getTime(),
				title: trimmedTitle,
				desc: trimmedDesc,
				done: false,
			};
            
			handleAddTodo(newTodo);

			resetFormValues();
		}
	};

	return (
		<form className="pe-4" onSubmit={handleTodoSubmit}>
			<div className="mb-3">
				<label className="form-label">Title</label>
				<input
					type="text"
					className="form-control w-100"
					name="title"
					placeholder="Buy Bread..."
					autoComplete="off"
					value={title}
					onChange={handleInputChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Description</label>
				<input
					type="text"
					className="form-control w-100"
					name="desc"
					placeholder="Buy my favorite kind of bread..."
					autoComplete="off"
					value={desc}
					onChange={handleInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary btn-lg w-100">
				+
			</button>
		</form>
	);
};
