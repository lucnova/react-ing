/* -------------------------------------------------------------------------- */
/*                                ASYNC / AWAIT                               */
/* -------------------------------------------------------------------------- */
/* PROMISES SIMPLIFICADOS */

/* DATOS DE LA API */
const apiKey = 'VXAD1LH05QB9';

const searchTerm = 'pixelart';

const url = `https://api.tenor.com/v1/random?key=${apiKey}&q=${searchTerm}&limit=1`;


console.info('URL Llamada:', url);

/* PETICIÓN ASÍNCRONA */
/**
 * Tienes que indicar que la función será asíncrona, colocando 'async'
 *   antes del nombre de la función y cada Promise ejecutada indicarla con 'await'
 */
const fetchAndShowGIF = async () => {
	try {
		const myTenorFetchResponse = await fetch(url);
		const jsonResponse = await myTenorFetchResponse.json();

		const {
			results,
			next
		} = jsonResponse;

		console.log(results, next);

		for (const currentSearchResult of results) {
			const gifURL = currentSearchResult.media[0].loopedmp4.url
			console.log('GIF URL', gifURL);

			const newVideo = document.createElement('video');
			newVideo.setAttribute('controls', '');
			newVideo.setAttribute('width', '80%');

			newVideo.innerHTML =
				`
            <source src="${gifURL}" type="video/mp4">
            Your browser does not support the video tag.
            `;

			document.querySelector('body').appendChild(newVideo);
		}
	}
	catch (error) {
        /* Manejar el error */
		console.warn(error);
	}
}

fetchAndShowGIF().then(() => {
	console.log('*Petición Terminada*');
});

// .catch(console.warn)     // -> Esto ya no iria aca, las peticiones de async/await son con try/catch dentro de funcion


/*
// A DIFERENCIA DE FETCH QUE SERÍA:

const myTenorFetchRequest = fetch(url);

myTenorFetchRequest.then(response => {
		return response.json();
	}).then(({results, next}) => {
		console.log('Respuesta:', results, next);

		for (const currentSearchResult of results) {
			const gifURL = currentSearchResult.media[0].loopedmp4.url
			console.log('GIF URL', gifURL);

			const newVideo = document.createElement('video');
			newVideo.setAttribute('controls', '');
			newVideo.setAttribute('width', '50%');

			newVideo.innerHTML =
				`
            <source src="${gifURL}" type="video/mp4">
            Your browser does not support the video tag.
            `;

			document.querySelector('body').appendChild(newVideo);
		}
	})
    .catch(console.warn);
*/