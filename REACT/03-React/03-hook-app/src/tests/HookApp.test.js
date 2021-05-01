import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Testing on <HookApp />', () => {
	test('should display accordingly', () => {
		const wrapper = shallow(<HookApp />);

		expect(wrapper).toMatchSnapshot();
	});
});
