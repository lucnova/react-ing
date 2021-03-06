//export const heroes = [
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC', 'Marvel'];

const getHeroByID = (id) => {
    return heroes.find((currHero) => currHero.id === id);
}

export {
    heroes as default,  // CON ESTO INDICO QUE ES POR DEFECTO
    owners,
    getHeroByID
};