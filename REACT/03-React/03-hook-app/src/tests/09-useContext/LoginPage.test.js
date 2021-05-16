import { mount, shallow } from 'enzyme';
import { LoginPage } from '../../components/09-useContext/LoginPage';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Testing on LoginPage', () => {
	// * Siempre al hacer pruebas con funciones, jest.fn() debe usarse para definirse el wrapper
	const setUser = jest.fn();

	const wrapper = mount(
		<UserContext.Provider
			value={{
				setUser,
			}}
		>
			<LoginPage />
		</UserContext.Provider>
	);

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should execute setUser as expected', () => {
		wrapper.find('button').at(0).prop('onClick')();
        // * Nota, daba erro r porque tengo dos botones; eligo con el 'at()'
		//wrapper.find('button').prop('onClick')();
        //wrapper.find(LoginPage).find('button').simulate('click');

		expect(setUser).toBeCalledWith({
			id: '123ABC',
			username: 'lucnova',
			email: 'alanugb@gmail.com',
		});
	});
});
