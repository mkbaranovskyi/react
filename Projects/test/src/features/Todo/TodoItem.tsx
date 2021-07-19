import React, { useContext } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../types'
import { toggleTodo } from './todoSlice'

const TodoItem: React.FC<{
	todo: ITodo
	index: number
}> = ({ todo, index }) => {
	const classes: string[] = []
	if (todo.completed) {
		classes.push('completed')
	}

	const dispatch = useDispatch()

	const toggleTodo = (id: string) => {
		dispatch(toggleTodo(id))
	}

	const removeTodo = (id: string) => {
		dispatch()
	}

	return (
		<li className="todoItem">
			<span className={classes.join(' ')}>
				<input
					type="checkbox"
					onChange={() => toggleTodo(todo.id)}
					checked={todo.completed}
				/>
				{index}) &nbsp;
				{todo.title}
			</span>
			<button className="removeButton" onClick={() => removeTodo(todo.id)}>
				&times;
			</button>
		</li>
	)
}

export default TodoItem
