import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

// * combineReducers -> Combina todos los reducers que se usan en la app.
//      Referencia: Video explicativo sobre el reducer.  (Que es un Store grande; una tienda
//                  donde vas y obtienes todo lo que gustes. FUENTE DE LA VERDAD)

// * Aqui se incluyen cada uno de los reducers de la App.
const reducers = combineReducers({
	auth: authReducer,
});

export const store = createStore(reducers);
