// * COMPONENTE PrivateRoute
// * Es una especie de puente entre ruta y componente, solamente verifica el booleano 'isAuth', y dependiendo de eso
//      se manda al Route uno u otro componente (pasando los demas props que se incluyan)

import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

// * ...rest es para pasar todos los props (resto) y hacer un puente entre ruta privada y componente a mostrar.
export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) => {
				return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
			}}
		/>
	);
};

// * PropTypes para el componente
PrivateRoute.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
