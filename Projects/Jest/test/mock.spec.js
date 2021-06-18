const forEach = require('./mock')

describe('Custom `forEach` function', () => {
	test('Mock test', () => {
		const myMock = jest.fn((value) => console.log(value))

		myMock.mockResolvedValueOnce('Res')
		myMock.mockResolvedValue('Rej')

		for (let i = 0; i < 3; i++) {
			myMock().then((result) => console.log(result))
		}

		console.log(myMock.mock.results)
	})
})
