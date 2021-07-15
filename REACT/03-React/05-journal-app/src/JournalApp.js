import React from 'react';
import './styles/styles.scss';
import { AppRouter } from './components/routers/AppRouter';

// * En este punto alto de la app puede importarse el store.
// * Higher Order Component -> Proveedor del Store.
import { store } from './store/store';
import { Provider } from 'react-redux';

export const JournalApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
