/* -------------------------------------------------------------------------- */
/*                         OBJECT LITERAL ENHANCEMENT                         */
/* -------------------------------------------------------------------------- */

/*
 * Como se añaden propiedades y valores a objetos
 */
'use strict';

/* ------------------------------- FORMA VIEJA ------------------------------ */
// const band = 'The Beatles';
// const genre = 'Rock';
// const songs = ["I'll Be Back", "Maxwell's Silver Hammer", "Revolution 9"];

// const justABand = {
//     'band': band,
//     'genre': genre,
//     'songs': songs
// };

// console.log(justABand);


/* ------------------------------- FORMA NUEVA ------------------------------ */
// Estos tomaran el nombre igual a las variables

const band = 'The Beatles';
const genre = 'Rock';
const songs = ["I'll Be Back", "Maxwell's Silver Hammer", "Revolution 9"];

const justABand = {
	band,
	genre,
	songs
};

console.log(justABand);