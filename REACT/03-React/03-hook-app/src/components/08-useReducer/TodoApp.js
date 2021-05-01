import React, { useEffect, useReducer } from 'react';

import { TodoList } from './TodoList';

import { useForm } from '../../hooks/useForm';
import todoReducer from './todoReducer';

// * DEFINIR EL ESTADO INICIAL DEL REDUCER (LISTA DE TODO's)

// * Esta forma es para evitar que se rejecute tras cada cambio
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];

	// return [{
	// 	id: new Date().getTime(),
	// 	title: 'Fix Chair',
	// 	desc: 'Fix the Office Chair',
	// 	done: true,
	// }];
};

export const TodoApp = () => {
	const [currentTodos, dispatch] = useReducer(todoReducer, [], init);
	const [{ title, desc }, handleInputChange, resetFormValues] = useForm({
		title: '',
		desc: '',
	});

	// * GRABAR EN LOCALSTORAGE CON UN USEEFFECT
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(currentTodos));
	}, [currentTodos]);

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

			const addTodoAction = {
				type: 'add',
				payload: newTodo,
			};

			dispatch(addTodoAction);

			resetFormValues();
		}
	};

	const handleDeleteTodo = (todoID) => {
		const deleteTodoAction = {
			type: 'delete',
			payload: todoID,
		};

		dispatch(deleteTodoAction);
	};

	const handleToggleTodo = (todoID) => {
		const toggleTodoAction = {
			type: 'toggle',
			payload: todoID,
		};

		dispatch(toggleTodoAction);
	};

	// ** CONTENIDO **

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>
						My Todo's <span className="badge bg-primary">{currentTodos.length}</span>
					</h1>

					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col ps-5">
					<h5>Here´s your todo's</h5>

					<TodoList currentTodos={currentTodos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}></TodoList>
				</div>

				<div className="col-3 ps-4 py-4 me-5">
					<h5>Add a new ToDo</h5>

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
				</div>
			</div>
		</>
	);
};
