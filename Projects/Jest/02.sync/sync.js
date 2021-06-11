class Lodash {
	/** Filters the array from the falsy values */
	compact(array) {
		return array.filter((elem) => elem)
	}

	groupBy(array, prop) {
		return array.reduce((accum, value) => {
			const key = typeof prop === 'function' ? prop(value) : value[prop]

			if (!accum[key]) {
				accum[key] = []
			}

			accum[key].push(value)
			return accum
		}, {})
	}
}

module.exports = Lodash
