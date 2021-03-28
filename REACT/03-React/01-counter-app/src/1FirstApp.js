//import React, { Fragment } from "react"; // IMPORTA Fragment. Por defecto React y luego Fragment independiente
import React from "react";

/* Functional Component */
/**
 * También existen otros tipos de componentes como el de Clases, pero Functional
 * parece ser lo que React está implementando.
 */
const FirstApp = () => {
	//return <h1>Yooo</h1>;

	// - En caso de querer mandar un objeto JSX completo:
	// - (1) DIV que engloba elementos
	//      No es tan bueno porque el navegador carga demasiados DIVS luego
	// return (
	// 	<div>
	// 		<h1>Macaco comenmdo piruleta azul</h1>
	// 		<p>Eu te amo</p>
	// 	</div>
	// );

	// - (2) HIGHER ORDER COMPONENT usando un Fragment
	// En vez de generar otro componente DIV, solo los agrupa sin DIV
	// return (
	// 	<Fragment>
	// 		<h1>Macaco comenmdo piruleta azul</h1>
	// 		<p>Eu te amo</p>
	// 	</Fragment>
	// );

	// - (3) Fragments sin importar Fragment
    // EXACTAMENTE lo mismo que Fragment
	return (
		<>
			<h1>Macaco comenmdo piruleta azul</h1>
			<p>Eu te amo</p>
		</>
	);
};

export default FirstApp;
