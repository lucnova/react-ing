import { shallow, mount } from 'enzyme';
import { HomePage } from '../../components/09-useContext/HomePage';
import { UserContext } from '../../components/09-useContext/UserContext';

const user = {
	id: 'TEST',
	username: 'lucnova',
	email: 'alanugb@gmail.com',
};

describe('Testing on HomePage', () => {
	// * 2) Al usar shallow envolviendo al HomePage solo renderiza el primer componente.
	//      Cambiar de shallow -> mount.
	// const wrapper = shallow(
	// 	<UserContext.Provider
	// 		value={{
	// 			user,
	// 		}}
	// 	>
	// 		<HomePage />
	// 	</UserContext.Provider>
	// );
	const wrapper = mount(
		<UserContext.Provider
			value={{
				user,
			}}
		>
			<HomePage />
		</UserContext.Provider>
	);

	test('should show component as snapshot', () => {
		// * 1) Si esto se ejecuta así sin mas, entonces da error: falta contexto en la funcion useContext
		//      Esto es porque estas pruebas son ejecutadas de manera aislada.
		//      Se resuelve envolviendo el HomePage con un UserContext como en el inicio (2).
		expect(wrapper).toMatchSnapshot();
	});
});
