/* CUANDO SE HACE IMPORTACION SIN DEFECTO */
//import { heroes } from "./data/heroes";
/* CUANDO SE HACE IMPORTACION POR DEFECTO + IMPORTACION DE UNA VARIABLE INDEPENDIENTE */
import heroes, {owners} from "./data/heroes";

console.log('EL HEROE: ', 3);
// const getHeroByID = (id) => heroes.find((currHero) => currHero.id === id)
const getHeroByID = (id) => {
    return heroes.find((currHero) => currHero.id === id);
}

console.log(getHeroByID(3));

console.log('HEROES DE "Marvel"');
const getHeroesByOwner = (ownerName) => {
    return heroes.filter((currHero) => currHero.owner === ownerName);
}

console.log(getHeroesByOwner('Marvel'));

console.log(owners);