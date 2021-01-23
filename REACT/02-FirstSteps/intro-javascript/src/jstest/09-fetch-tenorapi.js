/* -------------------------------------------------------------------------- */
/*                                    FETCH                                   */
/* -------------------------------------------------------------------------- */
/* DATOS DE LA API */
const apiKey = 'VXAD1LH05QB9';

const searchTerm = 'pixelart';

const url = `https://api.tenor.com/v1/random?key=${apiKey}&q=${searchTerm}&limit=1`;


/* QUERY FETCH */
const myTenorFetchRequest = fetch(url);

console.info('URL Llamada:', url);

myTenorFetchRequest.then(response => {
		/* Convertir a JSON; esto retorna una promesa que se puede retornar devuelta y usar con .then() */
		return response.json();
	}).then(({results, next}) => {
        /* Desestructuro la respuesta en 'results' y 'next' */
        /*
        *   {
        *       "results": [],
        *       "next": "1.145867109299"
        *   }
        */
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