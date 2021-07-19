import { createSlice } from '@reduxjs/toolkit'
import { strictEqual } from 'assert'
import { Action, ITodo } from '../../types'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: [] as ITodo[],
	reducers: {
		addTodo: (state, action: any) => {
			state.push(action.payload)
		},
		toggleTodo: (state, action: any) => {
			for (const elem of state) {
				if (elem.id === action.payload) {
					elem.completed = !elem.completed
					break
				}
			}
		},
		removeTodo: (state, action: any) => {
			for (const elem of state) {
				if (elem.id === action.payload) {
				}
			}
		}
	}
})

export const { addTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
