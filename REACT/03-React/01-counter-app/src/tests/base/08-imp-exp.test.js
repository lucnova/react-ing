import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../base/data/heroes';

describe('Pruebas en Heroes', () => {
	test('MUST return a hero by ID', () => {
		const searchedID = 1;
		const expectedHero = heroes.find((heroe) => heroe.id === searchedID);
		const returnedHero = getHeroeById(searchedID);

		expect(returnedHero).toEqual(expectedHero);
	});

	test('MUST return undefined if hero ID doesnt exist', () => {
		const searchedID = 100;
		const expectedHero = heroes.find((heroe) => heroe.id === searchedID);
		const returnedHero = getHeroeById(searchedID);

		expect(returnedHero).toBe(expectedHero);
	});

	/* -------------------------------- SEPARADOR ------------------------------- */

	test('MUST be a hero from DC', () => {
		const ownerName = 'DC';
		const expectedHeroes = heroes.filter((heroe) => heroe.owner === ownerName);
		const returnedHeroes = getHeroesByOwner(ownerName);

		expect(returnedHeroes).toEqual(expectedHeroes);
	});

	test('The length of the Marvel heroes array MUST be equal to 2', () => {
		const ownerName = 'Marvel';
		const returnedHeroes = getHeroesByOwner(ownerName);

		expect(returnedHeroes.length).toBe(2);
	});
});
