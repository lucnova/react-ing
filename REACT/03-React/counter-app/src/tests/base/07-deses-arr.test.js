import { retornaArreglo } from '../../base/07-deses-arr';

describe('TESTING ON 07-deses-arr.js', () => {
	test('"retornaArreglo" MUST return a String and a Number', () => {
		const [parameterA, parameterB] = retornaArreglo();

		expect(typeof parameterA).toEqual('string');
		expect(typeof parameterB).toEqual('number');
	});
});
