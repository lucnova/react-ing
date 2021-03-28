/**
 * Probando Componentes con JEST
 */
//import { render } from '@testing-library/react'; // - Pruebas Nativas -
//import '@testing-library/jest-dom'; // Para probar DOM en JEST *NOTA: No es necesario incluirlo para estas pruebas
import { shallow } from 'enzyme';

import FirstApp from '../FirstApp'; // Componente a probar

describe('Testing <FirstApp /> Component', () => {
	// - ENZYME -
	test('SHOULD show <FirstApp /> just like the SnapShot', () => {
		const sentTitle = 'Yo Opino';
		const wrapper = shallow(<FirstApp title={sentTitle} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('SHOULD show sent subtitle ', () => {
		const sentTitle = 'Yo Opino';
		const sentDescription = 'Opinando lo necesario';

		const wrapper = shallow(<FirstApp title={sentTitle} description={sentDescription} />);

        const searchedDescription = wrapper.find('p').text();

        expect(searchedDescription).toBe(sentDescription);
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
