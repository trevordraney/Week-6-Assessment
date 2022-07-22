const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(shuffleArray()).toHaveBeenCalled()
    })

    test('shuffle the items in the array', () => {
        expect(shuffleArray()).toHaveLength(shuffleArray())
    })
})