import React from 'react';
import { useForm } from '../../hooks/useForm';

export const CustomHookForm = () => {
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formValues;

	/**
	 * HABRA APLICACIONES CON MUCHOS FORMULARIOS; Reciclar codigo con un customHook para formularios.
     * 
     * Centralizan la lógica, son buenisimos para eso.
	 */

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formValues);
	};

	return (
		<>
			<div className="row">
				<div className="col text-center">
					<h1>CustomHookForm</h1>
					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col text-center">
					<form onSubmit={handleSubmit}>
						<div className="form-group mx-auto w-25 my-3">
							<label>Nombre:</label>
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="Name"
								autoComplete="off"
								value={name}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group mx-auto w-25 my-3">
							<label>Email:</label>
							<input
								type="text"
								name="email"
								className="form-control"
								placeholder="lorem@ipsum.com"
								autoComplete="off"
								value={email}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group mx-auto w-25 my-3">
							<label>Contraseña:</label>
							<input
								type="password"
								name="password"
								className="form-control"
								placeholder="********"
								value={password}
								onChange={handleInputChange}
							/>
						</div>

						<div className="form-group mx-auto w-50 mt-3">
							<input type="submit" className="form-control btn btn-primary" value="Enviar" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
