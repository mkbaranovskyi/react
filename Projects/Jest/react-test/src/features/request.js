const http = require('http')

function request(url) {
	return new Promise((resolve, reject) => {
		http.get(url, (response) => {
			let data = ''
			response.on('data', (_data) => (data += _data))
			response.on('end', () => resolve(data))
			response.on('error', (err) => reject(err))
		})
	})
}

export default request
