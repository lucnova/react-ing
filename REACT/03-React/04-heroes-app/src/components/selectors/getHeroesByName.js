import { heroes } from '../../data/heroes';

export const getHeroesByName = (searchedName = '') => {
	return heroes.filter((hero) => {
		return hero.superhero.toLocaleUpperCase().includes(searchedName.toLocaleUpperCase());
	});
};
