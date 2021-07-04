import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
	return (
		<>
			<h1 className="auth__title">Iniciar Sesión</h1>

			<form>
				<input type="text" placeholder="Correo" name="email" className="auth__input" autoComplete="off" />
				<input type="password" placeholder="Contraseña" name="password" className="auth__input" autoComplete="off" />

				<button className="btn btn-primary btn-block" type="submit" disabled={true}>
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

				<Link to="/auth/register" className="link">Registrarse</Link>
			</form>
		</>
	);
};
