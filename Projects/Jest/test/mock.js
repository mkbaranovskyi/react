function forEach(array, cb) {
	for (const item of array) {
		cb(item)
	}
}

module.exports = forEach
