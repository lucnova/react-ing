import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';

// * combineReducers -> Combina todos los reducers que se usan en la app.
//      Referencia: Video explicativo sobre el reducer.  (Que es un Store grande; una tienda
//                  donde vas y obtienes todo lo que gustes. FUENTE DE LA VERDAD)

// * Redux DevTools -> window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// * Se tiene que usar el composeEnhancers para que se pueda usar en conjunto con los DevTools de Chrome.
//          (Los DevTools son  un middleware, y si se quiere usar varios middlewares, composeEnhancers es usado)

// * En redux, todo es Sincrono, pero si se quiere manejar asincronicamente, debe ser antes manejado por un MIDDLEWARE
// *        En este caso, Redux Thunk es el Middleware.
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// * Aqui se incluyen cada uno de los reducers de la App.
const reducers = combineReducers({
	auth: authReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
