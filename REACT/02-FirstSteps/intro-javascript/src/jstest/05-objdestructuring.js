const aStreamer = {
    name: 'Vinny',
    username: 'vinesauce',
    aka: 'binyot',
    platforms: {
        yt: 'youtube',
        ttv: 'twitch'
    }
};

/* Puedes destructurar un objeto así */
//const {name, username, aka} = aStreamer;

const useeContext = function ({name, username, aka, platforms}) {
    return {
        dummyName: name,
        dummyUsername: username,
        dummyAka: aka,
        dummyPlatforms: platforms
    };
}

//const {dummyName, dummyUsername, dummyAka, dummyPlatforms} = useeContext(aStreamer);

/* DESTRUCTURAR: Extraer propiedades especificas de un objeto dentro de otro */
//const { dummyName, dummyUsername, dummyAka, dummyPlatforms:{yt, ttv} } = useeContext(aStreamer);
const { dummyName, dummyUsername, dummyAka, dummyPlatforms } = useeContext(aStreamer);
const {yt, ttv} = dummyPlatforms;

console.log(dummyName, dummyUsername, dummyAka);
console.log(yt, ttv);