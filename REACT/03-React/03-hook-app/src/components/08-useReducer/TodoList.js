import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ currentTodos = [], handleDeleteTodo, handleToggleTodo }) => {
	return (
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{currentTodos.map((todo) => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					handleDeleteTodo={handleDeleteTodo}
					handleToggleTodo={handleToggleTodo}
				></TodoListItem>
			))}
		</div>
	);
};
