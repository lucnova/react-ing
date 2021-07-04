import React from 'react';

export const LoginPage = () => {
	return (
		<>
			<h1>Iniciar Sesión</h1>

			<form>
				<input type="text" placeholder="lorem@ipsum.com" name="email" />
				<input type="password" placeholder="*******" name="password" />

				<button type="submit">Login</button>

				<hr />
			</form>
		</>
	);
};
