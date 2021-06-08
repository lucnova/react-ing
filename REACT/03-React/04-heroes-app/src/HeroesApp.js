import React, { useEffect, useReducer } from 'react';
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
	const [authUser, authDispatch] = useReducer(authReducer, {}, init);

    // * EFECTO PARA ESCRIBIR EL USUARIO EN LOCALSTORAGE CUANDO SE CAMBIE EL authUser
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(authUser));
		return () => {};
	}, [authUser]);

	// * value Distribuye el objeto a lo largo de la app (perfecto pues el login es necesario)
	return (
		<AuthContext.Provider value={{ authUser, authDispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};
