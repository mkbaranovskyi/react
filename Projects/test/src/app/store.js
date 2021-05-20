import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducer'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
	preloadedState = {
		todos: JSON.parse(persistedTodosString)
	}
}

export const store = configureStore({
	reducer: rootReducer,
	preloadedState
})
