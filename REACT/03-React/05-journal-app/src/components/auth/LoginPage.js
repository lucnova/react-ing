import React from 'react';
import { Link } from 'react-router-dom';
// * Redux Dispatcher
import { useDispatch } from 'react-redux';
// * Auth: Login Action
import { loginEmailAndPassword } from '../../actions/auth';
// * useForm Custom Hook
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
	// * Crear el dispatcher de Redux
	const dispatch = useDispatch();

	// * Establecer Datos del hook useForm
	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	// * Desestructurar valores del hook
	const { email, password } = formValues;

	// *---------------------------------------- HANDLES ----------------------------------------*
	const handleLogin = (e) => {
		e.preventDefault();

		console.log(email, password);
		// * Llamar al dispatcher de Redux:
		dispatch(loginEmailAndPassword(email, password));
	};

	// *---------------------------------------- INICIO ----------------------------------------*
	return (
		<>
			<h1 className="auth__title">Iniciar Sesión</h1>

			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Correo"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Contraseña"
					name="password"
					className="auth__input"
					autoComplete="off"
					value={password}
					onChange={handleInputChange}
				/>

				<button className="btn btn-primary btn-block" type="submit" disabled={false}>
					Iniciar Sesión
				</button>

				<hr className="auth__separator" />

				<div className="auth__social-networks">
					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="Google"
							/>
						</div>
						<p className="btn-text">
							<b>Inicia Sesión con Google</b>
						</p>
					</div>
				</div>

				<Link to="/auth/register" className="link">
					Registrarse
				</Link>
			</form>
		</>
	);
};
