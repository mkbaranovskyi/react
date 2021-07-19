import { nanoid } from 'nanoid'
import React, { useState, FormEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../types'
import { addTodo } from './todoSlice'

const TodoForm: React.FC = () => {
	const [title, setTitle] = useState('')

	const dispatch = useDispatch()

	const submitHandler: FormEventHandler = (e) => {
		e.preventDefault()

		const todo: ITodo = {
			id: nanoid(),
			completed: false,
			title,
			created: Date.now()
		}

		dispatch(addTodo(todo))
		setTitle('')
	}

	return (
		<>
			<h2>Todo</h2>
			<form onSubmit={submitHandler}>
				<label htmlFor="addTodoInput">Todo title:</label>
				<input
					id="addTodoInput"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button type="submit">Add Todo</button>
			</form>
		</>
	)
}

export default TodoForm
