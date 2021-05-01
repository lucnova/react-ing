import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
	const userContext = useContext(UserContext);
    console.log("🚀 ~ file: HomePage.js ~ line 6 ~ HomePage ~ userContext", userContext)

	return (
		<>
			<h1>Home Page</h1>
			<hr />
		</>
	);
};
