// * USE REDUCER -> Una manera de implementar MVC del lado de un componente;
//      aisla toda la logica de agregar, eliminar, entre otras fucniones que desees para que solo se modifique
//      mediante el useReducer.

// * ESTADO INICIAL *
const initialState = [
	{
		id: 1,
		todo: 'Fix Chair',
		done: true,
	},
];

// * FUNCION DEL REDUCER *
const todoReducer = (state = initialState, action) => {
	switch (action?.type) {
		case 'add':
			return [...state, action.payload];
		default:
			break;
	}

	return state;
};

// * MOSTRANDO EN CONSOLA *
let myTodos = todoReducer();
console.log(myTodos);

// * AGREGANDO UN NUEVO TODO *
const newTodo = {
	id: 2,
	todo: 'Do Pushups',
	done: false,
};

const addTodoAction = {
	type: 'add',
	payload: newTodo,
};

myTodos = todoReducer(myTodos, addTodoAction);

// * MOSTRANDO EN CONSOLA *
console.log(myTodos);
