import React, { useContext } from 'react'
import Context from '../../context'
import { ITodo, ContextType } from '../../type.d'

const TodoItem: React.FC<{
	todo: ITodo
	index: number
	onToggle: Function
}> = ({ todo, index, onToggle: toggleTodo }) => {
	const { removeTodo } = useContext<ContextType>(Context)

	const classes: string[] = []
	if (todo.completed) {
		classes.push('completed')
	}

	return (
		<li className="todoItem">
			<span className={classes.join(' ')}>
				<input
					type="checkbox"
					onChange={(e) => toggleTodo(index)}
					checked={todo.completed}
				/>
				<strong>{index}</strong>
				&nbsp;
				{todo.title}
			</span>
			<button className="removeButton" onClick={() => removeTodo(todo.id)}>
				&times;
			</button>
		</li>
	)
}

export default TodoItem
