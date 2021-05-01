import React from 'react';

export const TodoListItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<div className="col">
			<div className={`${todo.done === true ? 'card text-decoration-line-through' : 'card'}`}>
				<div className="card-body">
					<div className="row">
						<div className="col">
							<h5 className="card-title">{todo.title}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{new Date(todo.id).toLocaleString()}</h6>
							<p className="card-text">{todo.desc}</p>
							<button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)} disabled={todo.done}>
								Delete
							</button>
						</div>

						<div className="col text-center m-auto">
							<button className="btn btn-primary p-4" onClick={() => handleToggleTodo(todo.id)}>
								{todo.done === false ? 'Mark' : 'Unmark'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
