/**
 * PRUEBAS SOBRE COUNTERAPP
 *      - Probar que CounterApp sea mostrado correctamente (tal y como el snapshot)
 *
 *      - Debe mostrar el valor enviado tal cual
 */

import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('* TESTS ON <CounterApp />', () => {
	let wrapper = shallow(<CounterApp />); // Para no perder intellisense si se declara undefined

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('should display <CounterApp /> as intended', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should display sent initial value', () => {
		const sentValue = 500;
		const customWrapper = shallow(<CounterApp value={sentValue} />);

		const foundValue = customWrapper.find('h2').text().trim();

		expect(foundValue).toBe(sentValue.toString());
	});

	/* --------------------------- SE EJECUTA EN ORDEN -------------------------- */

	test('should increment value by 1', () => {
		wrapper.find('button').first().simulate('click');

		const foundValue = wrapper.find('h2').text().trim();
		expect(foundValue).toBe('1');
	});

	test('should decrement value by -1', () => {
		wrapper.find('button').at(1).simulate('click');

		const foundValue = wrapper.find('h2').text().trim();
		expect(foundValue).toBe('-1');
	});

	test('should reset value to the one being sended', () => {
		const sentValue = 50; // Definir el valor por defecto
		const customWrapper = shallow(<CounterApp value={sentValue} />); // Definir el componente

		// Simular varios +1
		customWrapper.find('button').first().simulate('click');
		customWrapper.find('button').first().simulate('click');
		customWrapper.find('button').first().simulate('click');
        // Simular -1
        customWrapper.find('button').at(1).simulate('click');

        // Simular reset
		customWrapper.find('button').last().simulate('click');

        // Buscar el valor y verificar que es el default
		const foundValue = customWrapper.find('h2').text().trim();
		expect(foundValue).toBe(sentValue.toString());
	});
});
