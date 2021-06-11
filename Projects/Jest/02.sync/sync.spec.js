const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {
	let array

	// Why not just initialize our array onece? Ideally, each test should be a 'pure function' - shouldn't change its arguments (our array). But it can be different. So we should ensure our array is the same before each test
	beforeEach(() => {
		array = [true, '', null, undefined, NaN, 0, 42, 'str', false]
	})

	afterAll(() => {
		_ = new Lodash()
	})

	test('Should be devined', () => {
		expect(_.compact).toBeDefined()
	})

	test('Should return falsy values from the array', () => {
		const result = [true, 42, 'str']
		// expect(_.compact(array)).toBe(result)	// Won't work because `toBe` only works with primitives
		expect(_.compact(array)).toEqual(result)
	})

	test('Should NOT contain falsy values', () => {
		const array = [true, '', null, undefined, NaN, 0, 42, 'str', false]
		expect(_.compact(array)).not.toContain(false)
		expect(_.compact(array)).not.toContain(0)
		expect(_.compact(array)).not.toContain('')
		expect(_.compact(array)).not.toContain(NaN)
		expect(_.compact(array)).not.toContain(null)
		expect(_.compact(array)).not.toContain(undefined)
	})
})

describe('Lodash groupBy', () => {
	test('Should be defined', () => {
		expect(_.groupBy).toBeDefined()
	})

	test('Should group array items by Math.floor', () => {
		const array = [2.2, 3.5, 2.4, 3]
		const result = {
			2: [2.2, 2.4],
			3: [3.5, 3]
		}
		expect(_.groupBy(array, Math.floor)).toEqual(result)
	})

	test('Should group array items by length', () => {
		const array = ['one', 'two', 'three']
		const result = {
			3: ['one', 'two'],
			5: ['three']
		}
		expect(_.groupBy(array, 'length')).toEqual(result)
	})

	test('Should not return array', () => {
		// Should return an object, not an array
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
	})
})
