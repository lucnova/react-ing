const albums = ['The White Album', 'Revolver', 'Abbey Road'];
//const albums = ['A Hard Days Night'];

/*
 *  Al destructurar arreglos:
 *      Puedes asignar nombre a las variables y con el operador: ""..."" -> Spread
 *      puedes hacer que las demas variables que no fueron asignadas caigan a una variable en comun
 */
const [anAlbum, ...moreALbums] = albums;

console.log(anAlbum, moreALbums);


const returnAnArray = () => (['ABC', 123]);

const anArray = returnAnArray();
console.log(anArray);

const [letters, numbers] = anArray;
console.log(letters, numbers);


const _useState = function(aValue) {
    return [aValue, () => {
        console.log('Yess');
    }];
};

const [nombre, setNombre] = _useState('a');

console.log(nombre);
setNombre();