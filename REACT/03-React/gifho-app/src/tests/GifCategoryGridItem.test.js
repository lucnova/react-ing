import React from 'react';
import { shallow } from 'enzyme';
import GifCategoryGridItem from '../components/GifCategoryGridItem';    // Mucho cuidado con exportaciones por defecto
// Si se cambia por defecto no se puede importar con {}

describe('TEST on GifCategoryGridItem', () => {
	const sentTitle = 'Test';
	const sentURL = 'https://localhost/algo.jpg';

	test('should display component correctly (as snapshot)', () => {
		const wrapper = shallow(<GifCategoryGridItem url={sentURL} title={sentTitle} />);

		expect(wrapper).toMatchSnapshot();
	});
});
