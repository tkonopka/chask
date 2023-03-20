import { roundDecimalPlaces, rad2deg, getMoments, deg2rad } from '../../src/general'
import { sortedIndex } from 'lodash'

describe('roundDecimalPlaces', () => {
    it('rounds to 1 decimal place', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 1))).toBe('0.3')
        expect(String(roundDecimalPlaces(10.0 / 3, 1))).toBe('3.3')
    })

    it('rounds to 3 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 3))).toBe('0.333')
        expect(String(roundDecimalPlaces(100 / 3, 3))).toBe('33.333')
    })

    it('rounds to 0 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 0))).toBe('0')
        expect(String(roundDecimalPlaces(100 / 3, 0))).toBe('33')
    })

    it('rounds to 5 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 5))).toBe('0.33333')
        expect(String(roundDecimalPlaces(100 / 3, 5))).toBe('33.33333')
    })
})

describe('radians and degrees', () => {
    it('simple conversion to degrees', () => {
        expect(Math.round(rad2deg(Math.PI))).toEqual(180)
        expect(Math.round(rad2deg(Math.PI / 2))).toEqual(90)
    })

    it('simple conversion to radians', () => {
        expect(roundDecimalPlaces(deg2rad(180), 3)).toEqual(roundDecimalPlaces(Math.PI, 3))
        expect(roundDecimalPlaces(deg2rad(90), 3)).toEqual(roundDecimalPlaces(Math.PI / 2, 3))
    })
})

// this tests a function from lodash -
// this is not strictly necessary but just checks the function satisfies local requirements
describe('sortedIndex', () => {
    it('search in empty array', () => {
        expect(sortedIndex([], 10)).toEqual(0)
    })

    it('search in one-item array', () => {
        expect(sortedIndex([10], 5)).toEqual(0)
        expect(sortedIndex([10], 15)).toEqual(1)
        expect(sortedIndex([10], 10)).toEqual(0)
    })

    it('search in array with unique items', () => {
        const array = [10, 20, 30]
        expect(sortedIndex(array, 5)).toEqual(0)
        expect(sortedIndex(array, 15)).toEqual(1)
        expect(sortedIndex(array, 25)).toEqual(2)
        expect(sortedIndex(array, 50)).toEqual(3)
    })

    it('search in array with repeated items', () => {
        const array = [10, 15, 20, 20, 20, 20, 20, 30]
        expect(sortedIndex(array, 20)).toEqual(2)
    })
})

describe('getMoments', () => {
    it('computes means and standard deviation', () => {
        const result = getMoments([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(result[0]).toEqual(5.5)
        expect(Math.round(1000 * Number(result[1])) / 1000).toEqual(9.167)
    })

    it('handles empty array', () => {
        const result = getMoments([])
        expect(result).toEqual([NaN, NaN])
    })

    it('handles single value', () => {
        const result = getMoments([5])
        expect(result).toEqual([5, NaN])
    })
})
