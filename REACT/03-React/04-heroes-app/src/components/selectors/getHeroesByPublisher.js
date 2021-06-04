import { heroes } from '../../data/heroes';

export const getHeroesByPublisher = (publisher) => {
	const validPublishers = ['DC Comics', 'Marvel Comics'];

	if (!validPublishers.includes(publisher)) {
		throw Error('getHeroesByPublisher', publisher, 'is not a valid publisher.', 'Valid publishers:', validPublishers.toString());
	}

	return heroes.filter((heroe) => heroe.publisher === publisher);
};
