import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './LoginPage.css';

export const LoginPage = ({ history }) => {
	// * Desestructurando el history para poder navegar rutas

	const { authDispatch } = useContext(AuthContext);

	const handleLogin = () => {
		// * Reemplazo de una ruta para que no pueda navegar atras hacia ella
		// history.replace('/');
		// * Se puede usar .push pero con replace reemplaza como si llegara directo, y no se pueda mover atrás

		const loggedUser = {
			username: 'lucnova',
		};

		authDispatch({
			type: types.login,
			payload: loggedUser,
		});

		const lastPath = localStorage.getItem('lastPath') || '/';

		history.replace(lastPath);
	};

	return (
		<div className="login-container">
			<div className="container">
				<div className="row">
					<div className="col mx-auto p-0">
						<div className="card rounded">
							<div className="login-box">
								<div className="login-snip">
									<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
									<label htmlFor="tab-1" className="tab">
										Iniciar Sesión
									</label>
									<input id="tab-2" type="radio" name="tab" className="sign-up" hidden={true} />
									<label htmlFor="tab-2" className="tab" hidden={true}>
										Registrarse
									</label>
									<div className="login-space">
										<div className="login">
											<div className="group">
												<label htmlFor="user" className="label">
													<i className="fas fa-user"></i> Usuario
												</label>
												<input name="user" type="text" className="input" placeholder="Ingresa tu Usuario" />
											</div>
											<div className="group">
												<label htmlFor="pass" className="label">
													<i className="fas fa-key"></i> Contraseña
												</label>
												<input name="pass" type="password" className="input" data-type="password" placeholder="*********" />
											</div>
											<div className="group">
												<button className="button" onClick={handleLogin}>
													<i className="fas fa-sign-in-alt"></i> Ingresar
												</button>
											</div>
											<div className="hr" />
										</div>
										<div className="sign-up-form"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
