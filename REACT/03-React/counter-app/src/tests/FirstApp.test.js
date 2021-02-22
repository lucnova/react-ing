/**
 * Probando Componentes con JEST
 */

import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Testing <FirstApp /> Component', () => {
	test('MUST be string: "Yo Opino"', () => {
		const expected = 'Yo Opino';

		// - Sin desestructurar -
		//const wrapper = render(<FirstApp title={'Yo Opino'} description={'Que Opinar es Necesario'} />); // Producto renderizado de lo que se quiere evaluar
		//wrapper.getByText();

		// - Destructurando -
		const { getByText } = render(<FirstApp title={expected} description={'Que Opinar es Necesario'} />); // Producto renderizado de lo que se quiere evaluar

		// - wrapper tiene varias funciones para testear.

		expect(getByText(expected)).toBeInTheDocument();

        // SE USARÁ ENZYME
	});
});
