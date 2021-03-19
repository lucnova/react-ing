import { shallow } from 'enzyme';
import GifhoApp from '../GifhoApp';

describe('testing on GifhoApp', () => {
	test('should match snapshot', () => {
		const wrapper = shallow(<GifhoApp />);

		expect(wrapper).toMatchSnapshot();
	});
});
