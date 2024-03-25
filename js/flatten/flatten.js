function flatten(value) {
    if (value === null || typeof value != 'object') {
        return value;
    }

    if (Array.isArray(value)) {
        return flattenArray(value);
    }

    return flattenObject(value);
}

function flattenArray(value, flattened = []) {
    if (Array.isArray(value)) {
        value.forEach(item => flattenArray(item, flattened));
    }
    else { flattened.push(value); }
    return flattened;
}

function flattenObject(object) {
    const flattenedObj = {};
    for (const key in object) {
        const value = object[key]
        const flattenValue = flatten(value)
        if (typeof flattenValue == 'object' || flattenValue === null) {
            Object.assign(flattenedObj, flattenValue);
        }
        else {
            flattenedObj[key] = flattenValue
        }

    }
    return flattenedObj;
}

exports.flatten = flatten;
