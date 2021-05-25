import React from 'react';
import './LoginPage.css';

export const LoginPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 mx-auto p-0">
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
												Usuario
											</label>
											<input name="user" type="text" className="input" placeholder="Ingresa tu Usuario" />
										</div>
										<div className="group">
											<label htmlFor="pass" className="label">
												Contraseña
											</label>
											<input name="pass" type="password" className="input" data-type="password" placeholder="*********" />
										</div>
										<div className="group">
											<input type="submit" className="button" defaultValue="Ingresar" />
										</div>
										<div className="hr" />
									</div>
									<div className="sign-up-form">
										<div className="group">
											<label htmlFor="user" className="label">
												Username
											</label>
											<input name="user" type="text" className="input" placeholder="Create your Username" />
										</div>
										<div className="group">
											<label htmlFor="pass" className="label">
												Password
											</label>
											<input name="pass" type="password" className="input" data-type="password" placeholder="Create your password" />
										</div>
										<div className="group">
											<label htmlFor="pass" className="label">
												Repeat Password
											</label>
											<input name="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" />
										</div>
										<div className="group">
											<label htmlFor="pass" className="label">
												Email Address
											</label>
											<input name="pass" type="text" className="input" placeholder="Enter your email address" />
										</div>
										<div className="group">
											<input type="submit" className="button" defaultValue="Sign Up" />
										</div>
										<div className="hr" />
										<div className="foot">
											<label htmlFor="tab-1">Already Member?</label>
										</div>
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
