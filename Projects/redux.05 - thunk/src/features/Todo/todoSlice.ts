import { createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../../types'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: [
		{
			id: 'asl24lf',
			completed: false,
			title: 'Buy milk',
			created: 1600000000000
		},
		{
			id: 'lasdfj4',
			completed: true,
			title: 'Walk the dog',
			created: 160010000000
		},
		{
			id: 'gdsf832',
			completed: false,
			title:
				'Some very very very very very very very very very very very very very very very very very very very very very very long title',
			created: 160020000000
		}
	] as ITodo[],
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
			const newState = [] as ITodo[]
			for (const elem of state) {
				if (elem.id !== action.payload) {
					newState.push(elem)
				}
			}
			return newState
		}
	}
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
