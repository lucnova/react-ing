import { shallow } from 'enzyme';
import { GifCategoryGridItem } from '../components/GifCategoryGridItem'; // Mucho cuidado con exportaciones por defecto
// Si se cambia por defecto no se puede importar con {}

describe('TEST on GifCategoryGridItem', () => {
	const sentTitle = 'Test';
	const sentURL = 'https://localhost/algo.jpg';

	const wrapper = shallow(<GifCategoryGridItem url={sentURL} title={sentTitle} />);

	test('should display component correctly (as snapshot)', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should display same title inside his p element', () => {
		const foundText = wrapper.find('p').text().trim();

		expect(foundText).toBe(sentTitle);
	});

	test('should display a valid URL as img:src', () => {
		const foundURL = wrapper.find('img').prop('src');

		expect(foundURL).toBe(sentURL);
	});
});
