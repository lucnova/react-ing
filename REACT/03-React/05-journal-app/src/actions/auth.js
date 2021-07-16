import { types } from '../types/types';

export const loginEmailAndPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(email, password));
		}, 3000);
	};
};

export const login = (uid, username) => {
	// * Es lo mismo que se hacia antes, pero concentrado en un objeto
	return {
		type: types.login,
		payload: {
			uid,
			username,
		},
	};
};
