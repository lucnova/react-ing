import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Testing on AddCategory', () => {
	const wrapper = shallow(<AddCategory setCategories={() => {}} />);

	test('should display component as snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should display changed value inside input text', () => {
		const sentValue = 'Hey';
		const input = wrapper.find('input[type="text"]');

		input.simulate('change', { target: { value: sentValue } });

		expect(wrapper.find('#inputValueCheck').text().trim()).toBe(sentValue);

        /*
        ESTO DA ERROR:
        
		const inputValue = wrapper.find('#inputValueCheck');
        ...
        expect(inputValue.text().trim()).toBe(sentValue);
        */
	});
});
