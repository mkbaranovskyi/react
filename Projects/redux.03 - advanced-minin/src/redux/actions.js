import {
	CHANGE_THEME,
	DECREMENT,
	INCREMENT,
	ENABLE_BUTTONS,
	DISABLE_BUTTONS
} from './types'

export function increment() {
	return {
		type: INCREMENT
	}
}

export function decrement() {
	return {
		type: DECREMENT
	}
}

// We use different syntax here to be able to use async callbacks
export function asyncIncrement() {
	return function (dispatch) {
		dispatch(disableButtons())
		setTimeout(() => {
			dispatch(increment())
			dispatch(enableButtons())
		}, 1000)
	}
}

export function changeTheme(newTheme) {
	return {
		type: CHANGE_THEME,
		payload: newTheme
	}
}

export function enableButtons() {
	return {
		type: ENABLE_BUTTONS
	}
}

export function disableButtons() {
	return {
		type: DISABLE_BUTTONS
	}
}
