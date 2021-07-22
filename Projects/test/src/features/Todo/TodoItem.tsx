import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { removeTodo, toggleTodo } from './todoSlice'
import { ITodo } from '../../types'

const TodoItem: React.FC<Props> = ({ todo, index, toggleTodo, removeTodo }) => {
	const classes: string[] = []
	if (todo.completed) {
		classes.push('completed')
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

const mapDispatchToProps = () => ({ toggleTodo, removeTodo })

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
	todo: ITodo
	index: number
}

export default connector(TodoItem)
