import {getParameters} from './validateParameters'

function generateSecureRandom() {
    try {
        if (typeof window === 'undefined') {
            /**
             * https://nodejs.org/api/crypto.html#cryptogetrandomvaluestypedarray
             */
            const crypto = require('crypto')
            const buffer = new Uint32Array(1)
            crypto.getRandomValues(buffer)
            return buffer[0] / (0xffffffff + 1)
        } else {
            /**
             * https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
             */
            const buffer = new Uint32Array(1)
            window.crypto.getRandomValues(buffer)
            return buffer[0] / (0xffffffff + 1)
        }
    } catch (error) {
        console.warn('Failed to generate secure random value, it returns Math.random()')
        return Math.random()
    }
}

export function secureRandom(params: {min?: number; max?: number} = {}) {
    const {min, max} = getParameters(params)

    return generateSecureRandom() * (max - min) + min
}
