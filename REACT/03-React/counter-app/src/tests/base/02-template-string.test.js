import { getSaludo } from '../../base/02-template-string';

describe('Testing on File String Templates', () => {
    // ESTIMULO
	test('"getSaludo" SHOULD say "Hola Alan"', () => {
		const someName = 'Alan';

		const result = getSaludo(someName);

		expect(result).toBe(`Hola ${someName}`);
	});

    // NO ESTIMULO 
    test('When NO ARGUMENT given, "getSaludo" SHOULD say "Hola camarada"', () => {
        const result = getSaludo();

		expect(result).toBe(`Hola camarada`);
    });
});
