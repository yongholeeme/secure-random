import {secureRandom} from '../src'

describe('secureRandom', () => {
    test('First Test', () => {
        expect(secureRandom()).toBe(1)
    })
})
