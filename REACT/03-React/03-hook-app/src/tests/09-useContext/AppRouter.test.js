import { mount } from 'enzyme';
import { AppRouter } from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UserContext';

// * Este componente es probado al momento solo con snapshot (Aun no esta optmizado.)
//      Ocuparemos probar los argumentos enviados en el router luego.

const user = {
	id: 'TEST',
	username: 'lucnova',
	email: 'alanugb@gmail.com',
};

describe('Testing on AppRouter', () => {
	const wrapper = mount(
		<UserContext.Provider
			value={{
				user,
			}}
		>
			<AppRouter />
		</UserContext.Provider>
	);

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
