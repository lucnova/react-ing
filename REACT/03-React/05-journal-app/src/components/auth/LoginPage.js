import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
	return (
		<>
			<h1>Iniciar Sesión</h1>

			<form>
				<input type="text" placeholder="lorem@ipsum.com" name="email" />
				<input type="password" placeholder="*******" name="password" />

				<button type="submit">Login</button>

				<hr />

				<div>
					<p>o</p>
					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Inicia Sesión con Google</b>
						</p>
					</div>
				</div>

				<Link to="auth/register">Registrarse</Link>
			</form>
		</>
	);
};
