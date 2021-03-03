import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Testing on AddCategory', () => {
	const setCategoriesFn = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategoriesFn} />);

	beforeEach(() => {
		/* Limipiar las simulaciones */
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategoriesFn} />);
	});

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

	test('should NOT call setCategories WITHOUT a value', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategoriesFn).not.toHaveBeenCalled();
	});
});
