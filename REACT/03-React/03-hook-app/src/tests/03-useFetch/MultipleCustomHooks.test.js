import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../components/03-useFetch/MultipleCustomHooks';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

jest.mock('../hooks/useFetch'); // Al utilizar el jest.mock indica que esto será emulado. (NO IMPORTA IMPLEMENTACIóN, sino FUNCIONAMIENTO)
jest.mock('../hooks/useCounter');

describe('testing on MultipleCustomHooks ', () => {
	test('should display as snapshot', () => {
		useFetch.mockReturnValue([
			{
				data: null,
				loading: true,
				error: null,
			},
		]);

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should display info as intended', () => {
		useFetch.mockReturnValue([
			{
				data: [
					{
						author: 'author',
						quote: 'quote',
						series: 'series',
					},
				],
				loading: false,
				error: null,
			},
		]);

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.spinner-border').exists()).toBe(false);
		expect(wrapper.find('.blockquote-footer').text().trim()).toContain('author');
	});
});
