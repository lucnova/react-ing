import { getUser, getActiveUser } from '../../base/05-funciones';

describe('-testing 05-funciones', () => {
	test('"getUser" MUST return same Object', () => {
		const userExpected = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const userResult = getUser();

		expect(userResult).toEqual(userExpected);
	});

	test('"getActiveUser" MUST return same Object', () => {
		const testUsername = 'lucnova';
		const userExpected = {
			uid: 'ABC567',
			username: testUsername,
		};

		const userResult = getActiveUser(testUsername);

		expect(userResult).toEqual(userExpected);
	});
});
