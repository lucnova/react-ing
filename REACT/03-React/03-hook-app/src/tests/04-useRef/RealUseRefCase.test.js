import { shallow } from 'enzyme';
import { RealUseRefCase } from '../../components/04-useRef/RealUseRefCase';

describe('Testing on RealUseRefCase', () => {
	const wrapper = shallow(<RealUseRefCase />);

	test('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
		// * NO debe existir MultipleCustomHooks
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
	});

	test('should display MultipleCustomHooks component when button is clicked', () => {
		// * Simular un click
		wrapper.find('button').simulate('click');
		// * Debe existir MultipleCustomHooks
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	});
});
