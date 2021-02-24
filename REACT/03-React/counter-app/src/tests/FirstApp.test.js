/**
 * Probando Componentes con JEST
 */
//import { render } from '@testing-library/react'; // - Pruebas Nativas -
import '@testing-library/jest-dom'; // Para probar DOM en JEST
import { shallow } from 'enzyme';

import FirstApp from '../FirstApp'; // Componente a probar

describe('Testing <FirstApp /> Component', () => {
	// - ENZYME -
	test('SHOULD show <FirstApp /> correctly', () => {
        const expectedTitle = 'Yo Opino';
		const wrapper = shallow( <FirstApp title={expectedTitle}/> );

        expect(wrapper).toMatchSnapshot();
	});

	// - Pruebas Nativas -
	/*
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
    */
});
