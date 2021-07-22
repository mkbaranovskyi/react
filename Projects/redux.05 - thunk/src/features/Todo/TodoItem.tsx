import React from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../types'
import { removeTodo, toggleTodo } from './todoSlice'

const TodoItem: React.FC<{
	todo: ITodo
	index: number
}> = ({ todo, index }) => {
	const dispatch = useDispatch()

	const classes: string[] = []
	if (todo.completed) {
		classes.push('completed')
	}

	return (
		<li className="todoItem">
			<span className={classes.join(' ')}>
				<input
					type="checkbox"
					onChange={() => dispatch(toggleTodo(todo.id))}
					checked={todo.completed}
				/>
				{index}) &nbsp;
				{todo.title}
			</span>
			<button
				className="removeButton"
				onClick={() => dispatch(removeTodo(todo.id))}
			>
				&times;
			</button>
		</li>
	)
}

export default TodoItem
