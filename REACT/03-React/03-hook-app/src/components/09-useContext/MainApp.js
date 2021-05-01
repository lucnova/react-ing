import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

// * Establecer el contexto a todo el componente principal.

export const MainApp = () => {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			<AppRouter />
		</UserContext.Provider>
	);
};
