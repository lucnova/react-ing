import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
	return (
		<>
			<h1 className="auth__title">Registrarte</h1>

			<form>
				<input type="text" placeholder="Nombre" name="name" className="auth__input" autoComplete="off" />
				<input type="email" placeholder="Correo" name="email" className="auth__input" autoComplete="off" />
				<input type="password" placeholder="Contraseña" name="password" className="auth__input" autoComplete="off" />
				<input type="password" placeholder="Confirmar Contraseña" name="password_confirm" className="auth__input" autoComplete="off" />

				<button className="btn btn-primary btn-block" type="submit" disabled={true}>
					Registrarse
				</button>

				<hr className="auth__separator" />

				<Link to="/auth/login" className="link">
					Iniciar Sesión
				</Link>
			</form>
		</>
	);
};
