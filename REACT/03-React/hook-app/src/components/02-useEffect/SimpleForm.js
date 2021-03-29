import React, { useState, useEffect } from 'react';

// HOOK: useEffect => Define un efecto secundario en el componente ( de ahi su nombre )

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formState;

	// useEffect -> Ejecutarse con cada cambio
	/* 
    useEffect(() => {
		console.log('Boo!');
	}); 
    */

	// useEffect -> Ejecutarse solo al inicio
	useEffect(() => {
		console.log('Boo!');
	}, []);

    // useEffect -> Ejecutarse al escuchar cambios en el estado
	useEffect(() => {
		console.log('* cambio *');
	}, [formState]);

    // useEffect -> Ejecutarse al escuchar cambios en el estado 'email'
	useEffect(() => {
		console.log('* email cambio *');
	}, [email]);

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<div className="row">
				<div className="col text-center">
					<h1>UseEffect</h1>
					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col text-center">
					<div className="form-group mx-auto w-50">
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
					<div className="form-group mx-auto w-50">
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
				</div>
			</div>
		</>
	);
};
