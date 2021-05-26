import { configureStore } from '@reduxjs/toolkit'
import {
	includeMeaningOfLife,
	sayHiOnDispatch
} from '../exampleAddons/enhancers'
import { print1, print2, print3 } from '../exampleAddons/middleware'
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
	middleware: [print1, print2, print3],
	preloadedState,
	enhancers: [sayHiOnDispatch, includeMeaningOfLife]
})
