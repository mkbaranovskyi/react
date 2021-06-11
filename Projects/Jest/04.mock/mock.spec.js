const map = require('./mock')

describe('Map function', () => {
	let array
	let fn

	// If you use any async code in these hooks, you should return a Promise or use an async function
	beforeEach(() => {
		array = [1, 2, 3, 5]
		// Define your function using a jest wrapper
		fn = jest.fn((x) => x ** 2)
		map(array, fn)
	})

	test('Should call cb', () => {
		expect(fn).toBeCalled()
	})

	test('Should call cb 4 times', () => {
		expect(fn).toBeCalledTimes(4)
		// Another way of doing it:
		expect(fn.mock.calls.length).toBe(4)
	})

	test('Should pow2 each element', () => {
		expect(fn.mock.results[0].value).toBe(1)
		expect(fn.mock.results[1].value).toBe(4)
		expect(fn.mock.results[2].value).toBe(9)
		expect(fn.mock.results[3].value).toBe(25)
	})
})
