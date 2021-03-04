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

	test('should call setCategories & change inputValue when given any text (length > 2)', () => {
		const value = 'Dame unos gifardos';

		//const input = wrapper.find('input[type="text"]');     // NOTA: Si se hace así, la instancia no cambia
		// no cambia como en JS
		// Buscar el input de texto y simular escribir el cambio
		wrapper.find('input').simulate('change', { target: { value } });

		// Encontrar el form y hacer submit
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		// Esperar a que la funcion de setCategories SI sea una funcion y sea llamada
		expect(setCategoriesFn).toHaveBeenCalledWith(expect.any(Function));
		// Esperar a que la funcion de setCategories sea llamada
		//expect(setCategoriesFn).toHaveBeenCalled();
		// Esperar a que el inputValue cambie
		expect(wrapper.find('input').text().trim()).toBe('');
	});
});
