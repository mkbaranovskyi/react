import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'

const logEnhancer =
	(createStore: Function): any =>
	(rootReducer: Function, preloadedState: Object, enhancers: Function[]) => {
		const store = createStore(rootReducer, preloadedState, enhancers)

		function newDispatch(action: Action) {
			const result = store.dispatch(action)
			console.log(store.getState())
			return result
		}

		return { ...store, dispatch: newDispatch }
	}

const store = configureStore({
	reducer: {
		counter: counterSlice
	},
	enhancers: [logEnhancer]
})

export default store

export type Action = {
	type: string
	payload?: Object
}
