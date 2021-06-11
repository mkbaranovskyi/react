const { sum, nativeNull } = require('./intro')

// This block unites a set of tests
describe('Sum function', () => {
	test('Adding 1 and 2 equals 3', () => {
		expect(sum(1, 2)).toBe(3)
		expect(sum(1, 2)).toEqual(3)
	})

	test('Should return the correct value comparing to other values', () => {
		expect(sum(1, 2)).toBeGreaterThan(2)
		expect(sum(1, 2)).toBeGreaterThanOrEqual(3)
		expect(sum(1, 2)).toBeLessThan(4)
		expect(sum(1, 2)).toBeLessThanOrEqual(3)
	})

	test('Should add 2 floating point values correctly', () => {
		// expect(sum(0.1, 0.2)).toBe(0.3)	// Will fail - 0.300000004
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
	})
})

describe('Native null function', () => {
	test('Should return null', () => {
		expect(nativeNull()).toBe(null)
		expect(nativeNull()).toBeNull()
		expect(nativeNull()).toBeFalsy()
		expect(nativeNull()).toBeDefined()
		expect(nativeNull()).not.toBeTruthy()
		expect(nativeNull()).not.toBeUndefined()
	})
})
