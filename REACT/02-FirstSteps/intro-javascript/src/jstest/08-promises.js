import {
	getHeroByID
}
from './data/heroes.js'

/*
const myPromise = new Promise((resolve, reject) => {
	console.log('Hola');
	setTimeout(() => {
        console.log(' soy ', getHeroByID(1).name);
        resolve(getHeroByID(1));
	}, 500);
});

myPromise.then(function(el) {
	console.log('*Resuelta :)*', el);
}).catch(function(e) {
	console.log('*NO Resuelta :(*', e);
}).finally(function() {
	console.log('*Como lo ves?*');
});
*/

const fetchHeroById = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            const heroObj = getHeroByID(id);

            heroObj !== undefined ? resolve(heroObj) : reject(`El héroe con ID: ${id} NO se encuentra.`);
		}, 500);
	});
}

// * Puede ser de esta forma: *
/*
fetchHeroById(6).then(el => {
	console.log('*Resuelta :)*', el);
}).catch(e => {
    console.warn('*Rechazada :(*', e);
}).finally(() => {
	console.info('*Como lo ves?*');
});
*/

// O de esta:
fetchHeroById(6).then(console.log).catch(console.warn).finally(() => {
	console.info('*Como lo ves?*');
});
