import todoReducer from '../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';

describe('Testing on todoReducer', () => {
	test('should return default state', () => {
		// * En el reducer; no se mando una accion por tanto el estado es igual.
		const currentState = todoReducer(demoTodos, {});

		expect(currentState).toEqual(demoTodos);
	});

	test('should add a new todo', () => {
		const newTodo = {
			id: 3,
			title: 'NUEVO',
			desc: 'NUEVO DESC',
			done: false,
		};

		const newDemoTodos = [...demoTodos, newTodo];

		const currentState = todoReducer(demoTodos, {
			type: 'add',
			payload: newTodo,
		});

		expect(currentState).toEqual(newDemoTodos);
		expect(currentState.length).toEqual(demoTodos.length + 1);
	});

	test('should delete one todo (ID: 2)', () => {
		const currentState = todoReducer(demoTodos, {
			type: 'delete',
			payload: 2,
		});

		expect(currentState.length).toEqual(demoTodos.length - 1);
	});

    test('should toggle one todo (ID: 2)', () => {
        const todoID = 2;
		const currentState = todoReducer(demoTodos, {
			type: 'toggle',
			payload: todoID,
		});

		expect(currentState[todoID - 1].done).toEqual(true);
		expect(currentState.length).toEqual(demoTodos.length);
	});
});
