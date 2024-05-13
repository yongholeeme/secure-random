export interface Parameter {
    min?: number
    max?: number
}

export function getParameters(params: Parameter) {
    const {min = 0, max = 1} = params

    if (min > max) {
        throw new Error('InvalidParameterError')
    }

    return {min, max}
}
