export function createStore(rootReducer, initialState) {
	// This 'type' doesn't matter and will never work as we don't have the handler for it - so the default state will be returned
	let state = rootReducer(initialState, { type: '__INIT__' })
	const subscribers = []

	return {
		dispatch(action) {
			state = rootReducer(state, action)
			subscribers.forEach((sub) => sub())
		},
		subscribe(cb) {
			subscribers.push(cb)
		},
		getState() {
			return state
		}
	}
}
