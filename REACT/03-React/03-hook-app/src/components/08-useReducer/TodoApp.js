import React, { useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import todoReducer from './todoReducer';

// * DEFINIR EL ESTADO INICIAL DEL REDUCER (LISTA DE TODO's) *
const initialState = [
	{
		id: new Date().getTime(),
		title: 'Fix Chair',
		desc: 'Fix the Office Chair',
		done: true,
	},
];

// * DEFINIR EL ESTADO INICIAL DEL REDUCER (LISTA DE TODO's) *
export const TodoApp = () => {
	const [currentTodos, dispatch] = useReducer(todoReducer, initialState);
	const [{ title, desc }, handleInputChange, resetFormValues] = useForm({
		title: '',
		desc: '',
	});

	// * FUNCION PARA MANEJAR EL FORM DE SUBIR UN TODO *
	const handleTodoSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: new Date().getTime(),
			title: title,
			desc: desc,
			done: false,
		};

		const addTodoAction = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(addTodoAction);

        resetFormValues();
	};

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

					<div className="row row-cols-1 row-cols-md-2 g-4">
						{currentTodos.map((todo) => (
							<div key={todo.id} className="col">
								<div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col">
												<h5 className="card-title">{todo.title}</h5>
												<h6 className="card-subtitle mb-2 text-muted">{new Date(todo.id).toLocaleString()}</h6>
												<p className="card-text">{todo.desc}</p>

												<button className="btn btn-danger">Delete</button>
											</div>

											<div className="col text-center m-auto">
												<button className="btn btn-primary p-4">DONE</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
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
