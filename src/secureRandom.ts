export function secureRandom(params: {min?: number; max?: number} = {}) {
    const {min = 0, max = 1} = params

    if (min > max) {
        throw new Error('InvalidParameterError')
    }

    return Infinity
}
