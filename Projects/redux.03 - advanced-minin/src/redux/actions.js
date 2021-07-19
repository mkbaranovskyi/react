import {
	CHANGE_THEME,
	DECREMENT,
	INCREMENT,
	ENABLE_BUTTONS,
	DISABLE_BUTTONS
} from './types'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

/**
 * 1) Disable buttons
 * 2) Set up a timer
 * 3) When the timer fires, perform increment and enable buttons
 */
export const asyncIncrement = () => (dispatch) => {
	dispatch(disableButtons())
	setTimeout(() => {
		dispatch(increment())
		dispatch(enableButtons())
	}, 1000)
}

export const changeTheme = (newTheme) => ({
	type: CHANGE_THEME,
	payload: newTheme
})

export const enableButtons = () => ({ type: ENABLE_BUTTONS })
export const disableButtons = () => ({ type: DISABLE_BUTTONS })
