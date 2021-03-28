import { shallow } from 'enzyme';
import GifhoApp from '../GifhoApp';

/* No es posible evaluar un hook useState en Jest */

describe('testing on GifhoApp', () => {
	test('should match snapshot', () => {
		const wrapper = shallow(<GifhoApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test('should display NO GifGrid components', () => {
		const wrapper = shallow(<GifhoApp defaultCategories={[]} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifCategoryGrid').length).toBe(0);
	});

	test('should display SAME LENGTH of GifGrid components', () => {
		const categoriesSent = ['Pixel Art', 'Vinesauce', 'DDLC'];
		const wrapper = shallow(<GifhoApp defaultCategories={categoriesSent} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifCategoryGrid').length).toBe(categoriesSent.length);
	});
});
