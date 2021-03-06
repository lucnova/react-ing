import { types } from '../types/types';

// * ESTADO EJ:
// const state = {
// 	username: 'lucnova',
// 	logged: true,
// };

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return { ...action.payload, logged: true };
		case types.logout:
			return { logged: false };
		default:
			return state;
	}
};
