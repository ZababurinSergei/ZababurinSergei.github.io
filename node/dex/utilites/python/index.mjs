import responses from './responses/index.mjs'

export const len = (a) => {
    return a.length
}
export const get = (self, key, defaultData, type) => {
    return self[key] ? key: defaultData
}
export const int = (a) => parseInt(a, 10)
export const max = (a, b) => Math.max(a, b)
export const min = (a, b) => Math.min(a, b)
export const get_int = (args, key, defaultData, minimum, maximum) => {
    const strvalue = get(key, args, defaultData)
    let value = null;
    try {
        value = int(strvalue)
    } catch (e) {
        value = defaultData
    }
    return max(minimum, min(maximum, value))
}

export { responses }

export default {
    min: min,
    max: max,
    int: int,
    get_int: get_int,
    get: get,
    len: len,
    responses: responses
}


