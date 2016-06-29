var isArray = require('lodash.isarray')
var isObject = require('lodash.isobject');

const hasShape = requiredShape => {
    var requiredKeys = [];
    if (isArray(requiredShape)) {
        requiredKeys = requiredShape;
    } else if (isObject(requiredShape)) {
        requiredKeys = Object.keys(requiredShape)
    } else {
        throw new Error(`Param error - requiredShape. Param provided was not array or object. Type Provided ${typeof (requiredShape)}`)
    }

    if (requiredKeys.length === 0) {
        throw new Error('Param error - requiredShape. Param provided did not include any keys. How can I check shape if no shape information provided?')
    }

    return objectToCheck => {
        if(!isObject(objectToCheck) || isArray(objectToCheck)) {
            throw new Error(`Param error - objectToCheck. Param provided is not an object or is an array. Type Provided ${typeof(objectToCheck)}`)
        }

        const objectKeys = Object.keys(objectToCheck);

        return requiredKeys.every(key => key in objectToCheck)
    }
}

module.exports.hasShape = hasShape