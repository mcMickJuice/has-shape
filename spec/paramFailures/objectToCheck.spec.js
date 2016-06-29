import test from 'ava'
import hasShape from '../hasShape'

let defaultShape
test.beforeEach(() => {
    defaultShape = hasShape({ name: 'myName' })
})


test('Should throw if array is provided', t => {
    t.throws(() => defaultShape([]))
})

test('Should throw if non object, non array is provided', t => {
    const invalidValues = [1,'hello', false]; 
    
    invalidValues.forEach(val => {
        t.throws(() => defaultShape(val))
    })
})

test('Should not throw if object provided', t => {
    t.notThrows(() => defaultShape({name: 'mike'}))
})