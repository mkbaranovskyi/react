export const print1 = (storeAPI) => (next) => (action) => {
	console.log('Middleware 1')
	return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
	console.log('Middleware 2')
	return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
	console.log('Middleware 3')
	return next(action)
}
