import React, { useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

// * Leer localstorage (luego sera backend) y si no entonces indicar que no esta logeado
const init = () => {
	return (
		JSON.parse(localStorage.getItem('user')) || {
			logged: false,
		}
	);
};

export const HeroesApp = () => {
	const [user, dispatch] = useReducer(authReducer, {}, init);

    // * value Distribuye el objeto a lo largo de la app (perfecto pues el login es necesario)
	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};
