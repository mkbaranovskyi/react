function map(array, cb) {
	const result = []
	for (const elem of array) {
		result.push(cb(elem))
	}
	return result
}

module.exports = map
