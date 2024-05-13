function generateSecureRandom() {
    try {
        if (typeof window === 'undefined') {
            /**
             * @todo use Node API
             * https://nodejs.org/api/crypto.html#cryptogetrandomvaluestypedarray
             */

            return Math.random()
        } else {
            /**
             * @todo use Web API
             * https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
             */

            return Math.random()
        }
    } catch {
        console.warn('Failed to generate secure random value, it returns Math.random()')
    } finally {
        return Math.random()
    }
}

export function secureRandom(params: {min?: number; max?: number} = {}) {
    const {min = 0, max = 1} = params

    if (min > max) {
        throw new Error('InvalidParameterError')
    }

    return generateSecureRandom() * (max - min) + min
}
