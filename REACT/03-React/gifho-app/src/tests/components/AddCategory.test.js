import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Testing on AddCategory', () => {
	test('should display component as snapshot', () => {
		const wrapper = shallow(<AddCategory setCategories={() => {}} />);

		expect(wrapper).toMatchSnapshot();
	});
});
