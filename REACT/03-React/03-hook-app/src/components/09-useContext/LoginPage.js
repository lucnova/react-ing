import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {
	const { setUser } = useContext(UserContext);

	return (
		<>
			<h1>Login Page</h1>
			<hr />

			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({
						id: '123ABC',
						username: 'lucnova',
						email: 'alanugb@gmail.com',
					})
				}
			>
				Login
			</button>

			<button className="btn btn-warning" onClick={() => setUser({})}>
				Logout
			</button>
		</>
	);
};
