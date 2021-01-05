/* -------------------------------------------------------------------------- */
/*                               SPREAD OPERATOR                              */
/* -------------------------------------------------------------------------- */

'use strict';
let dummyArr = [];
console.log('*SIN SPREAD*');

let songs = ["I'll Be Back", "Maxwell's Silver Hammer", "Revolution 9"];

console.log('DESPUES:', songs, dummyArr);

dummyArr = songs.reverse();

console.log('DESPUES:', songs, dummyArr);

/* -------- EVITANDO AFECTAR EL ARREGLO ORIGINAL CON SPREAD OPERATOR -------- */

dummyArr = [];
console.log('*CON SPREAD*');

let moreSongs = ["I'll Be Back", "Maxwell's Silver Hammer", "Revolution 9"];

console.log('DESPUES:', moreSongs, dummyArr);

dummyArr = [...moreSongs].reverse();

console.log('DESPUES:', moreSongs, dummyArr);