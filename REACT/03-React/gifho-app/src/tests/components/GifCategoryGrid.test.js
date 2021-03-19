import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifCategoryGrid from '../../components/GifCategoryGrid';

/* Importo el CUSTOM HOOK */
import { useFetchGifs } from '../../hooks/useFetchGifs';
/* Realizo un mock con jest para poder 'inicializarlo' */
jest.mock('../../hooks/useFetchGifs');

describe('testing on GifCategoryGrid', () => {
	const sentCategoryName = 'DDLC';

	test('should match the component snapshot', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifCategoryGrid categoryName={sentCategoryName} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('should display GridItems when data is gathered by useFetchGifs', () => {
		const imgs = [
			{
				id: '1241',
				title: 'tenor.com',
				url: 'https://media.tenor.com/images/bcb63018f904222a7f17e0532a517269/tenor.gif',
			},
			{
				id: '5346',
				title: 'tenor.com',
				url: 'https://media.tenor.com/images/bcb63018f904222a7f17e0532a517269/tenor.gif',
			},
		];

		useFetchGifs.mockReturnValue({
			data: imgs,
			loading: false,
		});

		const wrapper = shallow(<GifCategoryGrid categoryName={sentCategoryName} />);

		// Debe ser igual a snapshot
		expect(wrapper).toMatchSnapshot();
		// NO debe de mostrar el elemento loading
		expect(wrapper.find('p.animate__animated').exists()).toBe(false);
		// Debe mostrar la misma cantidad de componentes que del arreglo de data
		expect(wrapper.find('GifCategoryGridItem').length).toBe(imgs.length);
	});
});
