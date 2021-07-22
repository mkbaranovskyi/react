import { createSlice } from '@reduxjs/toolkit'

export const asyncIncrement = (dispatch: Function, getState: Function) => {
	setTimeout(() => {
		dispatch(increment())
	}, 1000)
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		increment: (state) => {
			++state.value
		},
		decrement: (state) => {
			--state.value
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
