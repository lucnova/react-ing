import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
	const userContext = useContext(UserContext);
	const { user } = userContext;

	return (
		<>
			<h1>Home Page</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 4)}</pre>
		</>
	);
};
