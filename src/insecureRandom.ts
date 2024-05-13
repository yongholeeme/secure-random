import {getParameters} from './validateParameters'

function generateInsecureRandom() {
    return Math.random()
}

export function insecureRandom(params: {min?: number; max?: number} = {}) {
    const {min, max} = getParameters(params)

    return generateInsecureRandom() * (max - min) + min
}
