import { types } from '../types/types';

/*
    Reducer encargado de la autenticación.
    
    ESTADO:

    state: {
        uid:    '',
        username:   '',
    }
*/

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				username: action.payload.username,
			};
		case types.logout:
			return {};
		default:
			return state;
	}
};
