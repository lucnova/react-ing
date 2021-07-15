import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

// * combineReducers -> Combina todos los reducers que se usan en la app.
//      Referencia: Video explicativo sobre el reducer.  (Que es un Store grande; una tienda
//                  donde vas y obtienes todo lo que gustes. FUENTE DE LA VERDAD)

// * Aqui se incluyen cada uno de los reducers de la App.
const reducers = combineReducers({
	auth: authReducer,
});

// * Redux DevTools -> window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// * NOTA: Falta una config adicional pero hasta que no quede todo lo demás no se agregara. (compose enhancers)
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
