/**
 * PRUEBAS SOBRE COUNTERAPP
 *      - Probar que CounterApp sea mostrado correctamente (tal y como el snapshot)
 *
 *      - Debe mostrar el valor enviado tal cual
 */

import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('* TESTS ON <CounterApp />', () => {
	test('should display <CounterApp /> as intended', () => {
		const wrapper = shallow(<CounterApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test('should display sent initial value', () => {
		const sentValue = 500;
		const wrapper = shallow(<CounterApp value={sentValue} />);

		const foundValue = wrapper.find('h2').text().trim();

		expect(foundValue).toBe(sentValue.toString());
	});
});
