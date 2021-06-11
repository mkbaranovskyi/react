const axios = require('axios')

class Ajax {
	static echo(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data)
				} else {
					reject(new Error('Error: no data is passed'))
				}
			}, 1000)
		})
	}

	static async get() {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts/1'
			)
			return response.data
		} catch (err) {
			console.error(err)
		}
	}
}

module.exports = Ajax
