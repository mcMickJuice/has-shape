import test from 'ava';
import hasShape from '../hasShape'

test('Should throw if non Array or Object is provided', t => {
    const invalidValues = [1,'hello', false];
    
    invalidValues.forEach(val => t.throws(() => hasShape(val)))
})

test('Should throw if no param provided', t => {
    t.throws(() => hasShape())
})

test('Should not throw if object provided', t => {
    t.notThrows(() => hasShape({name: 'cool!'}))
})

test('Should not throw if array provided', t => {
    t.notThrows(() => hasShape(['key']))
})

test('Should throw if zero key object provided', t => {
    t.throws(() => hasShape({}))
})

test('Should throw is zero length element provided', t => {
    t.throws(() => hasShape([]))
})