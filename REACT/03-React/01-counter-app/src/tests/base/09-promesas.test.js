import getHeroeByIdAsync from '../../base/09-promesas.js';
import heroes from '../../base/data/heroes.js';

describe('Test on 09-promesas.js', () => {
	test('getHeroeByIdAsync MUST return a hero async', (done) => {
		const heroID = 1;

		getHeroeByIdAsync(heroID).then((hero) => {
			expect(hero).toEqual(heroes[0]);

			done(); // Se llama para cuando termina un proceso asíncrono. SIEMPRE ES DESPUÉS DE expects
		});
	});

	test('getHeroeByIdAsync MUST return "No se pudo encontrar el héroe"', (done) => {
		const heroID = 100;

		getHeroeByIdAsync(heroID).catch((error) => {
			expect(error).toBe('No se pudo encontrar el héroe');
			done();
		});
	});
});
