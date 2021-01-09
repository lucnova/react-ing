
function printMe (aObject) {
    const newObject = {...aObject};
    aObject.name = 'The Silver Beatles';


    console.log(aObject.name);
    console.log(newObject.name);
}

const aObject = {
    name: 'The Beatles',
    genre: 'Rock',
    members: {
        john: {
            name: 'John Lennon'
        },
        paul: {
            name: 'Paul McCartney'
        },
        george: {
            name: 'George Harrison'
        },
        ringo: {
            name: 'Ringo Starr'
        }
    }
}

printMe(aObject, 'test');