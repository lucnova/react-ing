import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

// * Establecer el contexto a todo el componente principal.

export const MainApp = () => {
	const user = {
		id: '12ABC',
		username: 'lucnova',
		email: 'nlnovae@gmail.com',
	};

	return (
		<UserContext.Provider value={user}>
			<AppRouter />
		</UserContext.Provider>
	);
};
