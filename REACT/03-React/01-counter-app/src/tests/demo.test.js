// JEST -> https://jestjs.io/

describe('Testing: demo.test.js', function () { // "Agrupar" las pruebas
	test('MUST be same strings', function () {  // Definir la prueba
		// 1.- Arrange
		const aMessage = 'Hey There';

		// 2.- Act
		const otherMessage = `Hey There`;

		// 3.- Observar Comportamiento
		expect(aMessage).toBe(otherMessage);
	});
});
