const Ajax = require('./async')
const { default: axios } = require('axios')

jest.mock('axios')

describe('Ajax echo', () => {
	const data = 'hello!'

	test('Should return a value asynchronously', async () => {
		const result = await Ajax.echo(data)
		expect(result).toBe(data)
	})

	test('Should return a value with a Promise', () => {
		// You should RETURN a Promise for this to work
		return Ajax.echo(data).then((result) => {
			expect(result).toBe(data)
		})
	})

	test('Should catch an error asynchronously', async () => {
		// You should RETURN a Promise for this to work
		try {
			await Ajax.echo()
		} catch (err) {
			expect(err.message).toBe('Error: no data is passed')
		}
	})

	test('Should catch an error with a Promise', () => {
		// You should RETURN a Promise for this to work
		return Ajax.echo().catch((err) => {
			expect(err).toBeInstanceOf(Error)
		})
	})
})

describe('Ajax: get', () => {
	let response
	let posts

	beforeEach(() => {
		posts = [
			{
				id: 2,
				body: 'Not the actual post'
			}
		]

		// We wrap the actual response we're gonna get with this wrapper, so it'll have this predictable structure
		response = {
			data: {
				ourPosts: posts
			}
		}
	})

	test('Should fetch', () => {
		// Instead of making the actual request, Jest will simply return the object we defined
		axios.get.mockReturnValue(response)
		return Ajax.get().then((response) => {
			expect(response.ourPosts).toEqual(posts)
		})
	})
})
