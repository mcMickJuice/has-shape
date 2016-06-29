import test from 'ava'
import hasShape from '../hasShape'

const objectShapeParam = {
    name: 'mike',
    age: 3444,
    location: 'mexico'
}
const objectShape = hasShape(objectShapeParam)

test('Should valid object shape based on object keys passed as param - true case', t => {
    const validObject = {
        name: 'jimmy',
        age: 900,
        location: 'seattle'
    }

    t.true(objectShape(validObject))
})

test('Should valid object shape based on object keys passed as param - false case', t => {
    const invalidObject = {
        name: 'jimmy',
        age: 900,
    }

    t.false(objectShape(invalidObject))
})