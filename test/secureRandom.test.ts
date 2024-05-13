import {secureRandom} from '../src'

describe('secureRandom', () => {
    // Test 1: Default Behavior (0 <= value < 1)
    it('returns a random float between 0 (inclusive) and 1 (exclusive)', () => {
        const randomValue = secureRandom()

        expect(randomValue).toBeGreaterThanOrEqual(0)
        expect(randomValue).toBeLessThan(1)
    })

    // Test 2: Custom Maximum (0 <= value < max)
    it('returns a random float between 0 (inclusive) and a specified max (exclusive)', () => {
        const max = 10

        const randomValue = secureRandom({max})

        expect(randomValue).toBeGreaterThanOrEqual(0)
        expect(randomValue).toBeLessThan(max)
    })

    // Test 3: Custom Minimum and Maximum (min <= value < max)
    it('returns a random float between a specified min (inclusive) and max (exclusive)', () => {
        const min = 1
        const max = 100

        const randomValue = secureRandom({min, max})

        expect(randomValue).toBeGreaterThanOrEqual(min)
        expect(randomValue).toBeLessThan(max)
    })

    // Test 4: Invalid Parameters (min > max)
    it('throws an InvalidParameterError when min is greater than or equal to max', () => {
        const min = 100
        const max = 1

        try {
            secureRandom({min, max})
            // Fail test if above expression doesn't throw anything.
            expect(true).toBe(false)
        } catch (e) {
            expect(e instanceof Error ? e.message : '').toBe('InvalidParameterError')
        }
    })
})
