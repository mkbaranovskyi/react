import { DECREMENT, INCREMENT } from './types'

// A function returning the updated state
export function rootReducer(state, action) {
	if (action.type === INCREMENT) {
		return state + 1
	} else if (action.type === DECREMENT) {
		return state - 1
	}

	return state
}
