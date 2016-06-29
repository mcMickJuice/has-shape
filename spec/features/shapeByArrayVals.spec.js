import test from 'ava'
import hasShape from '../hasShape'

const objectKeysToCheck = ['name', 'age', 'location'];
const objectShape = hasShape(objectKeysToCheck)

test('Should validate object shape based on values of array - true case', t => {
    const validObject = {
        name: 'jim',
        age: 455,
        location: 'mpls'
    };

    t.true(objectShape(validObject))
})

test('Should validate object shape based on values of array - false case', t => {
    const invalidObject = {
        name: 'jim',
        age: 455
    }

    t.false(objectShape(invalidObject))
})
