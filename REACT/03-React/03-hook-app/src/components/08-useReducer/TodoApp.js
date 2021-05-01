import React, { useEffect, useReducer } from 'react';

import { TodoList } from './TodoList';
import { TodoAddModule } from './TodoAddModule';

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

	// * GRABAR EN LOCALSTORAGE CON UN USEEFFECT
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(currentTodos));
	}, [currentTodos]);

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

	// * OPTIMIZANDO

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
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

					<TodoAddModule handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</>
	);
};
