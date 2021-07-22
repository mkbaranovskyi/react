import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterSlice from '../features/Counter/counterSlice'
import todoSlice from '../features/Todo/todoSlice'

const logEnhancer =
	(createStore: Function): any =>
	(rootReducer: Function, preloadedState: Object, enhancers: Function[]) => {
		const store = createStore(rootReducer, preloadedState, enhancers)

		function newDispatch(action: any) {
			const result = store.dispatch(action)
			console.log(store.getState())
			return result
		}

		return { ...store, dispatch: newDispatch }
	}

const store = configureStore({
	reducer: {
		counter: counterSlice,
		todos: todoSlice
	},
	enhancers: [logEnhancer],
	middleware: [thunk]
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
