test('MUST be true', function () {
    const isActive = true;

    if(isActive) {
        throw new Error('It ISNT true :(');
    }
})